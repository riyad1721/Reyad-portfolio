import summery from "../../assets/img/project/summary.png";
// import quizeDetails from "../../assets/img/project/summary.jpeg";
import youtube from "../../assets/img/project/LLM-quiz_cleanup.png";
import qus from "../../assets/img/project/qustion.png";
// import influencer from "../../assets/img/project/Group 6.png";
import muslime from "../../assets/img/project/Group 8.png";
import muslimeDetails from "../../assets/img/project/Screenshot 2023-08-29 at 17-42-27 Muslime Ummah.png";
import personalPortfolio from "../../assets/img/project/Group 4.png";
import best from "../../assets/img/project/Group 13.png";
import bestDetails from "../../assets/img/project/Screenshot 2023-08-29 at 17-41-15 Best Choice.png";
import BD from "../../assets/img/project/object.png";
// import BTS from "../../assets/img/project/Group 9.png";
// import arc from "../../assets/img/project/Group 3.png";
import todo from "../../assets/img/project/Group 14.png";
import todoDetails from "../../assets/img/project/Screenshot 2023-08-29 at 14-48-36 Vite React TS.png";
import arcD from "../../assets/img/project/Screenshot 2023-08-29 at 14-48-11 Bauhaus Architecture.png";
import BTSD from "../../assets/img/project/Screenshot 2023-08-29 at 14-46-06 BTS.png";
import BDD from "../../assets/img/project/Screenshot 2023-08-29 at 14-45-03 CoursesBD.png";
import personalPortfolioHR from "../../assets/img/project/Group 16.png";
import personalPortfolioHRDetails from "../../assets/img/project/Screenshot 2023-08-29 at 14-43-36 HR Limon.png";
import personalPortfolioDetails from "../../assets/img/project/Screenshot 2023-08-29 at 14-41-53 Anisha Zahan.png";
import event from "../../assets/img/project/recomendation.png";
import calculate from "../../assets/img/project/Rectangle 53.png";
import youtubeDetails from "../../assets/img/project/screencapture-youtube-vedio-downloader-orcin-vercel-app-2023-08-29-14_33_54.png";

export const data = [
  {
    id: "1",
    img: summery,
    detailsImg: summery,
    name: "Text Summarization LaMini-FLAN-T5",
    description: [
      "Display the generated summary to users in a readable and understandable format.",
      "Enable users to upload documents in various formats (PDF, DOCX, TXT) for summarization.",
      "Provide a real-time preview of the summarization as users input or upload text, allowing them to adjust settings.",
      
    ],
    useTecnology: [
      "langchain",
      "sentence_transformers",
      "torch",
      "sentencepiece",
      "transformers",
      "accelerate",
      "pypdf",
      "streamlit",
      "fastapi",
      "aiofiles",
    ],
    live: "",
    code: "",
    server: "https://github.com/riyad1721/Text-Summarization-with-LaMini-Flan-T5-248M",
    type: "",
  },
  {
    id: "2",
    img: youtube,
    detailsImg: youtube,
    name: "Quiz Genarator with GPT-3 Turbo",
    description: [
      "Integrate a powerful language model (e.g., GPT-3) for generating quiz questions, answers, and explanations.",
      "Allow users to set difficulty levels for quizzes, and use the language model to generate questions accordingly.",
    ],
    useTecnology: ["openai", "langchain", "streamlit", "python-dotenv", "PyPDF2"],
    live: "",
    code: "https://github.com/riyad1721/Quiz-Genarator-with-GPT-3-Turbo",
    server: "",
    type: "",
  },
  {
    id: "3",
    img: qus,
    detailsImg: qus,
    name: "Qustion Answering",
    description: [
      "Display the generated summary to users in a readable and understandable format.",
      // "Enable users to upload documents in various formats (PDF, DOCX, TXT) for summarization.",
      "Provide a real-time preview of the summarization as users input or upload text, allowing them to adjust settings.",
      
    ],
    useTecnology: [
      "langchain",
      "sentence_transformers",
      "torch",
      "sentencepiece",
      "transformers",
      "accelerate",
      "pypdf",
      "streamlit",
      "fastapi",
      "aiofiles",
    ],
    live: "",
    code: "",
    server: "https://github.com/riyad1721/Text-Summarization-with-LaMini-Flan-T5-248M",
    type: "",
  },

  {
    id: "4",
    img: BD,
    detailsImg: BD,
    name: "Realtime Object Detection with YOLO v-5",
    description: [
      "Integrate object classification capabilities to identify and categorize detected objects.",
      "Design the app to scale well with an increasing number of detected objects.",
      "Optimize the app for efficient use of device resources, such as CPU and GPU.",
      
    ],
    useTecnology: [
      "yolo v-5",
      "django",
      "websocket",
      "opencv",
      "custom image dataset",
      "image Annotation with labelimg",
    ],
    live: "",
    code: "https://github.com/riyad1721/Yolo_V4_testting_with_django",
    server: "",
    type: "",
  },

  {
    id: "5",
    img: event,
    detailsImg: event,
    name: "Product Recomendation system",
    description: [
      "The apps are recomendend to given user product",
      
    ],
    useTecnology: ["beautifulsoup ", "opencv", "resnet-50", "Image Processing"],
    live: "",
    code: "",
    server: "",
    type: "",
  },

  // {
  //   id: "6",
  //   img: muslime,
  //   detailsImg: muslimeDetails,
  //   name: "Muslime Ummah",
  //   description: [
  //     "Using Tailwind, React-Redux, Moment .js for using dynamic date in events route.",
  //     "Cross browser operability,Responsive design for all devices.",
  //     "Process improvement,workflow optimization.User Requirement Gathering.",
  //     "Fresh,Comentable,CleanCode,Error handling, Debugging,fixing problems.Client Interaction this project.",
  //   ],
  //   useTecnology: [
  //     "Tailwind",
  //     "Next Js",
  //     "Axios",
  //     "Redux",
  //     "Moment js",
  //     "Swiper slide",
  //     "Node Js",
  //     " Express Js",
  //     "Mongoose",
  //   ],
  //   live: "https://muslim-ummah-3d299.web.app/",
  //   code: "https://github.com/anishazahan/Muslime-Ummah",
  //   server: "https://github.com/anishazahan/Muslime-Ummah-server",
  //   type: "Frontend",
  // },

  // {
  //   id: "7",
  //   img: todo,
  //   detailsImg: todoDetails,
  //   name: "Todo App React Typescript",
  //   description: [
  //     "User add todo",
  //     "User delete todo",
  //     "Beautiful Design",
  //     "Responsive Design",
  //   ],
  //   useTecnology: ["Html", "Css", "Tailwind"],
  //   live: "https://todo-app-react-typescript-65ia.vercel.app/",
  //   code: "https://github.com/anishazahan/todo-app-react-typescript",
  //   server: "",
  //   type: "Frontend",
  // },

  // {
  //   id: "8",
  //   img: personalPortfolioHR,
  //   detailsImg: personalPortfolioHRDetails,
  //   name: "Personal Portfolio(HR)",
  //   description: [
  //     "Cross browser operability,Responsive design for all devices.",
  //     "Process improvement,workflow optimization.User Requirement Gathering.",
  //     "Fresh,Comentable,CleanCode,Error handling, Debugging,fixing problems.Client Interaction this project.",
  //   ],
  //   useTecnology: ["Tailwind", "React Js", "Aos animation", "Swiper slide"],
  //   live: "https://hr-limon.vercel.app/",
  //   code: "https://github.com/anishazahan/portfolio-hr",
  //   server: "",
  //   type: "Frontend",
  // },

  // {
  //   id: "9",
  //   img: personalPortfolio,
  //   detailsImg: personalPortfolioDetails,
  //   name: "Personal Portfolio",
  //   description: [
  //     "Using Tailwind, Next Js for good performance optimization",
  //     "Cross browser operability,Responsive design for all devices.",
  //     "Process improvement,workflow optimization.User Requirement Gathering.",
  //     "Fresh,Comentable,CleanCode,Error handling, Debugging,fixing problems.Client Interaction this project.",
  //   ],
  //   useTecnology: ["Tailwind", "Next Js", "Aos animation", "Swiper slide"],
  //   live: "https://portfolio-anisha.vercel.app/",
  //   code: "https://github.com/anishazahan/Portfolio-2",
  //   server: "",
  //   type: "Frontend",
  // },

  // {
  //     "id":"8",
  //     "img":"https://i.ibb.co/RcFjD8D/Screenshot-2022-11-30-at-22-16-31-Form-with-SASS.png",
  //     "name":"form-styling-with-sass",
  //     "description":[
  //         "Beautiful Design",
  //         "Responsive Design",
  //         "adding Sass",
  //         "Using raw html css code"
  //     ],
  //     "useTecnology":[
  //         "Html","CSS","SASS"
  //     ],
  //     "live":"https://form-styling-with-sass.vercel.app/",
  //     "code":"https://github.com/anishazahan/form-styling-with-sass",
  //     "server":""
  // },
  // {
  //     "id":"9",
  //     "img":"https://i.ibb.co/cxZ4d41/Screenshot-2022-11-30-at-22-30-12-React-App.png",
  //     "name":"Crypto Cafe",
  //     "description":[
  //         "Beautiful Design",
  //         "Responsive Design",
  //         "Fetch Data with react hook",
  //         "Dynamicaly coin details data load"
  //     ],
  //     "useTecnology":[
  //         "Html","CSS","React","React-Router","React-Hook"
  //     ],
  //     "live":"https://form-styling-with-sass.vercel.app/",
  //     "code":"https://github.com/anishazahan/Country-app",
  //     "server":""
  // },

  // {
  //   id: "10",
  //   img: influencer,
  //   detailsImg:
  //     "https://i.ibb.co/gywTnBB/Screenshot-2022-12-01-at-16-42-12-Influencer-Gears.png",
  //   name: "Influencer-Gear",
  //   description: [
  //     "Beautiful Design",
  //     "Responsive Design",
  //     "Using Fontawesome icons",
  //     "raw html and css code",
  //     "css grid system implement",
  //   ],
  //   useTecnology: ["Html", "CSS", "Fontawesome"],
  //   live: "https://influencer-gear-kappa.vercel.app/",
  //   code: "https://github.com/anishazahan/Influencer-Gear",
  //   server: "",
  //   type: "Frontend",
  // },

  //   {
  //     id: "3",
  //     img: calculate,
  //     detailsImg: calculate,
  //     name: "Saving Calculate",
  //     description: [
  //       "This is saving manangement calculate app",
  //       "You can Calculate in How much money do you spend from your total income",
  //       "If your expenses are more than your gross income, it will show in your remaining balance.",
  //       "If your expenses are less than your gross income, it will show in your savings balance.",
  //     ],
  //     useTecnology: ["html", "Css", "Javascript(es6)"],
  //     live: "https://nostalgic-joliot-c1bf7a.netlify.app/",
  //     code: "https://github.com/anishazahan/Saving-Calculate",
  //     server: "",
  //     type: "Frontend",
  //   },

  // {
  //   id: "11",
  //   img: BTS,
  //   detailsImg: BTSD,
  //   name: "BTS Service",
  //   description: [
  //     "Beautiful Design",
  //     "Responsive Design",
  //     "Using Fontawesome icons",
  //     "raw html and css code",
  //     "css grid system implement",
  //   ],
  //   useTecnology: ["Html", "Css", "Tailwind"],
  //   live: "https://bts-kappa.vercel.app/",
  //   code: "https://github.com/anishazahan/BTS-PSD-to-HTML",
  //   server: "",
  //   type: "Frontend",
  // },
  // {
  //   id: "12",
  //   img: arc,
  //   detailsImg: arcD,
  //   name: "Architecture Service",
  //   description: [
  //     "Beautiful Design",
  //     "Responsive Design",
  //     "Using Fontawesome icons",
  //     "raw html and css code",
  //     "css grid system implement",
  //   ],
  //   useTecnology: ["Html", "Css", "Tailwind"],
  //   live: "https://architecture-rosy.vercel.app/",
  //   code: "https://github.com/anishazahan/architechture-2",
  //   server: "",
  //   type: "Frontend",
  // },
];
