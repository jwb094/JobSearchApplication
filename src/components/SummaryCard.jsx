import React from 'react';

function SummaryCard(props) {
    return (
        <section  data-template="summaryCard" data-view="default" classNameName="c-summary-card | py-12">
                <details className="group rounded-lg border border-gray-200 bg-white shadow-sm">
  <summary
    className="flex cursor-pointer list-none items-center justify-between p-4 font-semibold text-gray-800 hover:bg-gray-50"
  >
    <span>Frequently Asked Question</span>

    {/* Arrow Icon */}
    <svg
      className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </summary>

  <div className="border-t border-gray-200 p-4 text-gray-600">
    <p>
      This is the content inside the details element. It can contain
      paragraphs, lists, images, forms, or any other HTML content.
    </p>
  </div>
</details>
        </section>
    );
}

export default SummaryCard;