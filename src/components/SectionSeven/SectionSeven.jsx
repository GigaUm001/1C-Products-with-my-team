import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: 'С чего начать работу с 1С-Товары?',
    answer: 'Описание для "С чего начать работу с 1С-Товары?"',
  },
  {
    question: 'Как подключить 1С-Ритейл Чекер* и 1С-Товары?',
    answer: `Для этого подключите бесплатно новый тариф «1С–Ритейл Чекер».

Каждую неделю вам на почту будет приходить письмо с рекомендациями:
• какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;
• какие товары у вас в избытке, а какие следует отнести к неликвидам;
• какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.`,
  },
  {
    question: 'Средний чек, о чем нам может рассказать?',
    answer: 'Описание для "Средний чек, о чем нам может рассказать?"',
  },
  {
    question: 'Сценарии автозаказа сервиса 1С-Товары',
    answer: 'Описание для "Сценарии автозаказа сервиса 1С-Товары"',
  },
  {
    question: 'Методы и формулы расчета торговой наценки',
    answer: 'Описание для "Методы и формулы расчета торговой наценки"',
  },
];

const SectionSeven = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1312px] mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Ответы на вопросы</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white rounded-full transition-all duration-300 ${
              openIndex === index ? 'rounded-3xl py-4 px-6' : 'py-4 px-6'
            } shadow-sm cursor-pointer`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <FiChevronUp className="text-lg" />
              ) : (
                <FiChevronDown className="text-lg" />
              )}
            </div>
            {openIndex === index && (
              <div className="mt-4 text-sm text-gray-600 whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionSeven;
