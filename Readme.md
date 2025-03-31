# Newsletter Summarizer using Mistral AI + Google Apps Script

I built this free, no-cost automation that:
- Scans unread emails from your Gmail inbox (like newsletters),
- Summarizes the content using Mistral AI,
- Logs the summary (along with metadata like date, subject, sender) to a Google Sheet.

# Stack
- Google Apps Script
- Gmail
- Google Sheets
- Mistral AI's API

# How to Use
1. Create a new Google Sheet.\
2. Go to Extensions > Apps Script and paste in the code from `Code.gs`.\
3. Add your Mistral API key in the script.\
4. Set a time-driven trigger (e.g., run every day at 8AM).\
5. You're all set!

 Example Output
| Date       | Sender             | Subject                             | Summary                  | Link                                            |\
|------------|--------------------|-------------------------------------|--------------------------|-------------------------------------------------|\
| 2025-03-31 | publishing@email.mckinsey.com | What common biases can distort decision-making? | Quick summary text here | [Open Email](https://mail.google.com/...)       |

###  To-Do
- [ ] Add error handling
- [ ] Build UI for setting preferences
- [ ] Explore threading/sentiment-based clustering
