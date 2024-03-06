This repository is a template for a portfolio website using [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). It is a simple, clean, and responsive website that can be used to showcase your experience and projects. It looks good on both desktop and mobile devices.  

Click here for a live demo of the template: https://portfolio-web-template.vercel.app/

## Getting Started

First clone or download the repository and open the project in your terminal.  
Then run the following commands:
```
npm install

npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Personalizing the website
To make the email functionality work, you need to create a `.env.local` file in the root of the project and add the following environment variables:
```JavaScript
RESEND_API_KEY="*********"
SENDTOEMAIL="************"
```

I use [Resend](https://resend.com/) to send the emails. You can sign up for free and get an API key. Follow the [quickstart](https://resend.com/docs/send-with-nextjs) here for more details. `SENDTOEMAIL` is the email address where you want to receive the emails. Make sure to adjust the `from` email in `route.js` in the `src/app/api/send` folder according to Resend guidelines. I use [React Hot Toast](https://react-hot-toast.com/) for the popup notifications when an email is sent.

The website is divided into different sections, namely:
1. Navbar (Navbar.jsx)
2. HeroSection (HeroSection.jsx)
3. Education (Education.jsx)
4. Work Experience (WorkExperience.jsx)
5. Projects (Projects.jsx)
6. Skills (Skills.jsx)
7. Certifications (Certifications.jsx)
8. Contact (Contact.jsx)
9. Footer (Footer.jsx)

To edit the content of one of these sections, you can simply edit the corresponding .jsx file in the `components` folder. `page.js` is the main file that imports all the sections and renders them in the order you want.

I use [LottieFiles](https://lottiefiles.com/) for the animation in the hero section. You can replace the `coding.json` file in the `public/assets` folder with your own animation.

Make sure to replace the `resume.pdf` file in the `public/assets` folder with your own resume. Same goes for `logo.svg` and `logo_white.svg` in the `public/assets` folder. 

Also edit the GitHub and LinkedIn links in `ExternalLinks.jsx` in the `components` folder to your own links. If you remove the link, the website will still work, but the corresponding icon will not be displayed.


## Deploy on Vercel

The easiest way to deploy your website is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.  

Make sure to also include the environment variables you added in the `.env.local` file in Vercel during the deployment process to make the email functionality work. Deployment might fail if the environment variables are not set properly on Vercel.
