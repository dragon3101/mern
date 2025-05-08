About my MERN projects:
1. MERN = MongoDB + Express + React + Node.
   - Backend: simple MVC model
   - Frontend: Vite (as build tool) + Chakra UI (as pre-build element library) + zustand (state managment, Redux is 'overkill' for this small app)  
3. This is a Web App Gift Shop to Add/Update/Delete gift (as an employee)
4. Adding AI Agent (Chatbot) for 'Customers' use to recommend gift: using Voiceflow (AI Chatbot builder) + Make.com (connecting app and server: in this case, connect Voiceflow to MongoDB to search DB)
5. Current version:
   - Can only ask 1 question (you have to click 'Let's start over' or click 'Refresh' the bot to ask another one)
   - Questions should be about gift suggestion. For example: "I need a gift" or "Need a present for my dad's 60th birthday"
   - Filter based on:
        + gender (not required)
        + price (not required)
        + age (*required): will be asked if not mention in the Question.

          
About installation:
1. Git Pull
2. "npm run build" (build the app so they both run on 1 port)
3. "npm run start" (check the port config, currently it's 5000)
4. Debug:
   - Backend is using 5000 and use VS to debug Node
   - Frontend is 5173 as default, using browser is debug.
  
About Deployment Service:
- Using Render (free version) to deploy. Here is the URL: https://mern-0yrb.onrender.com
- After 15 mins inactive, it will go to sleep and need to take time (up to 2 mins) to wake up again (will see the "Application Loading" show up). 

  
Reference links:
- MERN (freeCodeCamp on YT): https://www.youtube.com/watch?v=O3BUHwfHf84&t=241s&ab_channel=freeCodeCamp.org
- Chakra: https://chakra-ui.com/
- Zustand: https://github.com/pmndrs/zustand
- Voiceflow: https://www.voiceflow.com/ 
- Make.com: https://us2.make.com/
- Render: https://render.com/
