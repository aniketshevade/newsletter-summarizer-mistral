function summarizeNewsletters() {
  var sheet = SpreadsheetApp.openById('1o7UN0REY6KJ_2WGFQ5KamSpzYP0vkVKcvUJMzlgOdeA').getSheetByName('Sheet1');
  var threads = GmailApp.search('is:unread');
  
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    var messages = thread.getMessages();
    
    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];
      var date = message.getDate();
      var sender = message.getFrom();
      var subject = message.getSubject();
      var body = message.getPlainBody();
      // Use the message's ID to create a link that opens the specific email.
      var link = "https://mail.google.com/mail/u/1/#all/" + message.getId();
      
      // Build the payload with a system message to guide summarization.
      var payload = {
         "model": "mistral-small-latest", // adjust to your preferred model if needed
         "messages": [
            {
              "role": "system",
              "content": "You are an expert summarizer. Provide a concise summary in 3 sentences."
            },
            {
              "role": "user",
              "content": "Summarize the following newsletter:\n\n" + body
            }
         ]
      };
      
      var options = {
         "method": "post",
         "contentType": "application/json",
         "payload": JSON.stringify(payload),
         "headers": {
             "Authorization": "Bearer " // Replace with your API key 
         },
         "muteHttpExceptions": true  // Allows you to log full error responses
      };
      
      // API endpoint remains the same unless documentation specifies a different one.
      var endpoint = 'https://api.mistral.ai/v1/chat/completions';
      
      try {
         var response = UrlFetchApp.fetch(endpoint, options);
         var responseCode = response.getResponseCode();
         
         if (responseCode !== 200) {
           Logger.log("Error (" + responseCode + ") for message: " + subject + " - " + response.getContentText());
           continue;
         }
         
         var data = JSON.parse(response.getContentText());
         // Extract the summary from the API response.
         var summary = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content 
                       ? data.choices[0].message.content 
                       : "No summary returned";
         
         sheet.appendRow([date, sender, subject, summary, link]);
         message.markRead();
      } catch (e) {
         Logger.log("Exception processing message with subject: " + subject + ". " + e);
      }
    }
  }
}