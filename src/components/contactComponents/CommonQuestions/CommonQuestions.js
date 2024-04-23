import React, { useEffect, useState } from "react";
import "./CommonQuestions.css";
import { Container } from "react-bootstrap";

// import Faq from "react-faq-component";
import FAQ from "./FAQ.js";

const CommonQuestions = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "هل متوفر ضمان علي الصيانة بعد عمل الصيانة؟",
      answer:
        "نعم، بكل تأكيد يمكنك طلب الضمان من الفني بعد الانتهاء من الصيانة وقبل مغادرته وسيقوم بتسجيلها في طلبك ويمكنك التواصل مع الفني خلال فترة الضمان.",
      open: true,
    },
    {
      question: "كيف أقوم بالدفع؟ وما هي سياسة الالغاء؟",
      answer:
        "بعد انتهاء الفني من عملة وتحديد المبلغ المطلوب يمكنك دفع المبلغ كاملا له وتأكد من اضافة المبلغ في طلبك، وفي حالة الغاء الطلب بعد وصول الفني للعميل وقبل بدأ العمل يدفع العميل 100 جنيه مصاريف انتقال للفني",
      open: false,
    },
    {
      question: "أنا فني وأريد العمل في مجال الصيانة معكم؟",
      answer:
      "بكل سهولة يمكنك التسجيل في التطبيق كفني وتحديد انواع الاجهزة والماركات والمدن التي تعمل بها، بعد تفعيل حسابك يمكنك استقبال طلبات الصيانة من العملاء بسهولة.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div className="CommonQuestions">
      <div className="firstIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="53"
          height="63"
          viewBox="0 0 53 63"
          fill="none"
        >
          <path
            d="M-19.5567 0.875268C-19.4961 0.665332 -19.3698 0.480693 -19.1967 0.349068C-19.0236 0.217443 -18.8131 0.145929 -18.5967 0.145264H-5.68666C-5.55132 0.145127 -5.41759 0.172568 -5.29375 0.225892C-5.1699 0.279215 -5.05857 0.357284 -4.96666 0.455262C3.92667 9.74193 12.8 19.0386 21.6533 28.3453C23.2833 30.0553 23.7633 33.2753 22.3733 34.9053C17.0133 41.2386 8.32667 50.1453 -3.68666 61.6253C-3.87242 61.7987 -4.11904 61.8952 -4.37666 61.8953H-17.9267C-18.0711 61.8953 -18.2138 61.864 -18.345 61.8036C-18.4762 61.7432 -18.5928 61.655 -18.6867 61.5453C-19.4067 60.7053 -19.3867 59.4153 -18.5867 58.5653C-10.24 49.7186 -1.82998 40.9353 6.64336 32.2153C6.82658 32.0283 6.92921 31.777 6.92921 31.5153C6.92921 31.2535 6.82658 31.0022 6.64336 30.8153C-1.76331 22.2353 -10.16 13.6453 -18.5466 5.04527C-19.68 3.8786 -20.0167 2.4886 -19.5567 0.875268Z"
            fill="#0A2640"
          />
          <path
            d="M38.8131 51.1052C36.3531 53.5552 32.0232 58.4252 28.0832 61.6452C27.9087 61.7937 27.6854 61.8753 27.4532 61.8752C23.4798 61.8619 19.5165 61.9352 15.5631 62.0952C13.6731 62.1652 12.2632 61.5452 12.6032 59.4152C12.636 59.2128 12.7264 59.0251 12.8632 58.8752L38.4331 32.3252C38.6097 32.1363 38.7072 31.8868 38.7053 31.6282C38.7034 31.3696 38.6025 31.1216 38.4232 30.9352L13.3232 4.9252C12.5832 4.1652 12.1465 3.25853 12.0132 2.2052C11.9398 1.63853 12.2265 1.10854 12.8731 0.615202C14.2331 -0.414798 24.2232 0.155199 26.2032 0.175199C26.3359 0.175401 26.4674 0.203012 26.5895 0.25633C26.7116 0.309648 26.8218 0.387539 26.9132 0.485197C32.9132 6.7652 38.9132 13.0352 44.9132 19.2952C50.9032 25.5552 55.6431 31.2452 50.1231 39.1652C47.7831 42.5252 42.5631 47.3752 38.8131 51.1052Z"
            fill="#0A2640"
          />
        </svg>
      </div>
      <Container>
        <h3 className="MainHeadContact">الاسئله الشائعه</h3>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </Container>
      <div className="lastIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="53"
          height="63"
          viewBox="0 0 53 63"
          fill="none"
        >
          <path
            d="M-19.5567 0.875268C-19.4961 0.665332 -19.3698 0.480693 -19.1967 0.349068C-19.0236 0.217443 -18.8131 0.145929 -18.5967 0.145264H-5.68666C-5.55132 0.145127 -5.41759 0.172568 -5.29375 0.225892C-5.1699 0.279215 -5.05857 0.357284 -4.96666 0.455262C3.92667 9.74193 12.8 19.0386 21.6533 28.3453C23.2833 30.0553 23.7633 33.2753 22.3733 34.9053C17.0133 41.2386 8.32667 50.1453 -3.68666 61.6253C-3.87242 61.7987 -4.11904 61.8952 -4.37666 61.8953H-17.9267C-18.0711 61.8953 -18.2138 61.864 -18.345 61.8036C-18.4762 61.7432 -18.5928 61.655 -18.6867 61.5453C-19.4067 60.7053 -19.3867 59.4153 -18.5867 58.5653C-10.24 49.7186 -1.82998 40.9353 6.64336 32.2153C6.82658 32.0283 6.92921 31.777 6.92921 31.5153C6.92921 31.2535 6.82658 31.0022 6.64336 30.8153C-1.76331 22.2353 -10.16 13.6453 -18.5466 5.04527C-19.68 3.8786 -20.0167 2.4886 -19.5567 0.875268Z"
            fill="#0A2640"
          />
          <path
            d="M38.8131 51.1052C36.3531 53.5552 32.0232 58.4252 28.0832 61.6452C27.9087 61.7937 27.6854 61.8753 27.4532 61.8752C23.4798 61.8619 19.5165 61.9352 15.5631 62.0952C13.6731 62.1652 12.2632 61.5452 12.6032 59.4152C12.636 59.2128 12.7264 59.0251 12.8632 58.8752L38.4331 32.3252C38.6097 32.1363 38.7072 31.8868 38.7053 31.6282C38.7034 31.3696 38.6025 31.1216 38.4232 30.9352L13.3232 4.9252C12.5832 4.1652 12.1465 3.25853 12.0132 2.2052C11.9398 1.63853 12.2265 1.10854 12.8731 0.615202C14.2331 -0.414798 24.2232 0.155199 26.2032 0.175199C26.3359 0.175401 26.4674 0.203012 26.5895 0.25633C26.7116 0.309648 26.8218 0.387539 26.9132 0.485197C32.9132 6.7652 38.9132 13.0352 44.9132 19.2952C50.9032 25.5552 55.6431 31.2452 50.1231 39.1652C47.7831 42.5252 42.5631 47.3752 38.8131 51.1052Z"
            fill="#0A2640"
          />
        </svg>
      </div>
    </div>
  );
};

export default CommonQuestions;
