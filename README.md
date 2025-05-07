About my MERN projects:
1. MERN = MongoDB + Express + React + Node.
   - Backend: simple MVC model
   - Frontend: Vite (as build tool) + Chakra UI (as pre-build element library) + zustand (state managment, Redux is 'overkill' for this small app)  
3. This is a Web App Gift Shop to Add/Update/Delete gift
4. Adding Chatbot for 'Customer' to recommend gift: using Voiceflow (Chatbot builder) + Make.com (connecting app and server: in this case, connect Voiceflow to MongoDB to search DB)
5. Current version: Can only ask 1 question and it should be gift recommendation.

About installation:
1. Pull
2. "npm run build" (build the app so they both run on 1 port)
3. "npm run start" (check the port config, currently it's 5000)
4. Debug:
   - Backend is using 5000 and use VS to debug Node
   - Frontend is 5173 as default, using browser is debug.
  
MERN guide reference link (freeCodeCamp on YT): https://www.youtube.com/watch?v=O3BUHwfHf84&t=241s&ab_channel=freeCodeCamp.org 