{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # Newsletter Summarizer using Mistral AI + Google Apps Script\
\
I built this free, no-cost automation that:\
- Scans unread emails from your Gmail inbox (like newsletters),\
- Summarizes the content using Mistral AI,\
- Logs the summary (along with metadata like date, subject, sender) to a Google Sheet.\
\
### \uc0\u55357 \u57056 \u65039  Stack\
- Google Apps Script\
- Gmail\
- Google Sheets\
- Mistral AI's API\
\
### \uc0\u9881 \u65039  How to Use\
\
1. Create a new Google Sheet.\
2. Go to **Extensions > Apps Script** and paste in the code from `Code.gs`.\
3. Add your Mistral API key in the script.\
4. Set a time-driven trigger (e.g., run every day at 8AM).\
5. You're all set!\
\
### \uc0\u55358 \u56800  Example Output\
\
| Date       | Sender             | Subject                             | Summary                  | Link                                            |\
|------------|--------------------|-------------------------------------|--------------------------|-------------------------------------------------|\
| 2025-03-31 | publishing@email.mckinsey.com | What common biases can distort decision-making? | Quick summary text here | [Open Email](https://mail.google.com/...)       |\
\
### \uc0\u55358 \u56810  To-Do\
- [ ] Add error handling\
- [ ] Build UI for setting preferences\
- [ ] Explore threading/sentiment-based clustering\
\
### \uc0\u55357 \u56556  Contact\
Created by [Your Name](https://www.linkedin.com/in/yourprofile) \'97 feel free to reach out!}