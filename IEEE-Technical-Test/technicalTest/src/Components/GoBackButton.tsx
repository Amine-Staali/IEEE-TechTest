export default function GoBackButton() {
  return (
    <>
      <div className="flex items-center justify-between w-max mb-12 ml-16p">
        <svg
          className="rotate-180 mr-4"
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="12.5"
          viewBox="0 0 320 512"
        >
          <path
            fill="#162E85"
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
          />
        </svg>
        <span className="text-gray-400 font-medium">
          Go back to Requests <span className="mr-3 ml-3">/</span>
          <span className="text-blue-800">New Outcome Request</span>
        </span>
      </div>
    </>
  );
}
