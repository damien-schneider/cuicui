import FaqSection from "@/cuicui/marketing-ui/questions-and-answers/messaging-like-qna/messaging-like-qna";

export const MessagingLikeQnaPreview = () => {
  return (
    <FaqSection
      data={[
        {
          answer: "The internet doesn't close. It's available 24/7.",
          icon: "❤️",
          id: 1,
          question: "How late does the internet close?",
        },
        {
          answer: "No, you don't need a license to browse this website.",
          id: 2,
          question: "Do I need a license to browse this website?",
        },
        {
          answer:
            "Our cookies are digital, not edible. They're used for website functionality.",
          id: 3,
          question: "What flavour are the cookies?",
        },
        {
          answer: "Yes, but we do have a return policy",
          icon: "⭐",
          id: 4,
          question: "Can I get lost here?",
        },
        {
          answer: "Don't worry, you can always go back or refresh the page.",
          id: 5,
          question: "What if I click the wrong button?",
        },
      ]}
    />
  );
};

export default MessagingLikeQnaPreview;
