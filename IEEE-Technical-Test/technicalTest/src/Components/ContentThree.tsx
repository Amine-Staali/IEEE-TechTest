import GoBackButton from "./GoBackButton";
import AnotherSection from "./AnotherSection";
import upload from "../assets/upload.png";

export default function ContentThree() {
  return (
    <>
      <div className="ml-24 mt-14 mb-14">
        <GoBackButton />
        <AnotherSection n={2} />
        <div className="ml-27p">
          <div className="w-9/12 bg-gray-100 shadow-md rounded-lg px-5 py-8 ">
            <form
              onSubmit={(e: { preventDefault: () => void }) => {
                e.preventDefault();
              }}
            >
              <div className="">
                <input
                  className="w-full block mb-2 px-3 bg-gray-200 border border-solid border-gray-300 rounded-sm py-3"
                  type="url"
                  name="url"
                  placeholder="Event URL"
                  required
                />
                <span className="block text-sm mt-4 mb-4">
                  Example:{" "}
                  <a
                    className="text-blue-700 underline"
                    href="https://events.vtools.ieee.org/m/123456"
                  >
                    https://events.vtools.ieee.org/m/123456
                  </a>{" "}
                </span>
                <hr />
                <table className=" mt-1 mb-1 w-full">
                  <thead>
                    <tr>
                      <th className="w-1/4 text-left text-blue-700 text-sm font-normal px-2 py-2">
                        Event Title
                      </th>
                      <th className="w-1/4 text-left text-blue-700 text-sm font-normal px-2 py-2">
                        Event Type
                      </th>
                      <th className="w-1/4 text-left text-blue-700 text-sm font-normal px-2 py-2">
                        Event Date
                      </th>
                      <th className="w-1/4 text-left text-blue-700 text-sm font-normal px-2 py-2">
                        Event Venue/City
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-sm px-2 py-2">Label</td>
                      <td className="text-sm px-2 py-2">Label</td>
                      <td className="text-sm px-2 py-2">Label</td>
                      <td className="text-sm px-2 py-2">Label</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <br />

                <span className="block font-medium mb-2">
                  Does the event have attendees?
                </span>
                <div className="flex items-center mb-8">
                  <label htmlFor="Chair" className="mr-11">
                    <input
                      className="mr-2"
                      type="radio"
                      name="attendees"
                      required
                    />
                    Yes
                  </label>
                  <label htmlFor="Treasurer">
                    <input
                      className="mr-2"
                      type="radio"
                      name="attendees"
                      required
                    />
                    No
                  </label>
                </div>

                <span className="block font-bold mb-2">Sales Quotations</span>
                <span className="block font-medium mb-2">Currency</span>
                <div className="flex items-center mb-8">
                  <label htmlFor="Chair" className="mr-11">
                    <input
                      className="mr-2"
                      type="radio"
                      name="currency"
                      required
                    />
                    USD
                  </label>
                  <label htmlFor="Treasurer">
                    <input
                      className="mr-2"
                      type="radio"
                      name="currency"
                      required
                    />
                    TND
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between bg-gray-200 px-3 py-3 rounded-sm mb-5 ">
                <span className="block text-gray-900 text-md">
                  Sales Quotation #1
                </span>
                <div className="flex items-center w-max">
                  <span className="mr-2">$--</span>
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    width="12.25"
                    viewBox="0 0 448 512"
                  >
                    <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                  </svg>
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    width="14"
                    viewBox="0 0 512 512"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between bg-gray-200 px-3 py-3 rounded-sm mb-5 ">
                <span className="block text-gray-900 text-md">
                  Sales Quotation #2
                </span>
                <div className="flex items-center w-max">
                  <span className="mr-2">$--</span>
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    width="12.25"
                    viewBox="0 0 448 512"
                  >
                    <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                  </svg>
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    width="14"
                    viewBox="0 0 512 512"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between bg-gray-200 px-3 py-3 rounded-sm mb-5 ">
                <span className="block text-gray-900 text-md">
                  Sales Quotation #3
                </span>
                <div className="flex items-center w-max">
                  <span className="mr-2">$--</span>
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    width="12.25"
                    viewBox="0 0 448 512"
                  >
                    <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                  </svg>
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    width="14"
                    viewBox="0 0 512 512"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center bg-gray-200 px-3 py-3 rounded-sm mb-5 ">
                <span className="block w-8 h-8 mr-3 bg-blue-800 text-white text-3xl text-center rounded-full">
                  +
                </span>
                <span className="bloc font-bold text-sm">
                  Add Sales Quotation
                </span>
              </div>
              <select
                name="SalesQuotation"
                className="w-full block px-3 py-3 mb-5 bg-gray-200 border border-solid border-gray-300 rounded-sm "
                required
              >
                <option value="" disabled selected hidden>
                  Which quote?
                </option>
                <option value="1#">Sales Quotaion #1</option>
                <option value="2#">Sales Quotaion #2</option>
                <option value="3#">Sales Quotaion #3</option>
              </select>
              <textarea
                name="justification"
                placeholder="Justification"
                className="resize-none w-full h-32 block px-3 py-3 mb-5 bg-gray-200 border border-solid border-gray-300 rounded-sm"
                required
              ></textarea>

              <hr />
              <table className=" mt-1 mb-1 w-full">
                <thead>
                  <tr>
                    <th className="w-2/5 text-left text-sm font-normal px-2 py-2">
                      TOT. REQUESTED AMOUNT
                    </th>
                    <th className="w-2/5 text-left text-sm font-normal px-2 py-2">
                      OLD BALANCE
                    </th>
                    <th className="w-2/5 text-left text-sm font-normal px-2 py-2">
                      NEW BALANCE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-md px-2 py-2 text-blue-700">$598.24</td>
                    <td className="text-md px-2 py-2 text-green-700">
                      $6,598.24
                    </td>
                    <td className="text-md px-2 py-2 text-red-700">
                      $6,000.00
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />

              <span className="block font-medium mb-5">
                Additional Information
              </span>
              <div className="flex items-center text-sm text-gray-400 mb-5">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="14"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#FFD43B"
                    d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                  />
                </svg>
                you have requested an amount over $150, please upload a detailed
                event agenda.
              </div>

              <div className="flex items-center justify-between  px-4 py-2 border-2 border-dotted border-blue-900 border-spacing-4 rounded-md mb-7">
                <div className="flex items-center">
                  <img className="mr-5" src={upload} alt="" />
                  <span className="font-bold ">Attach PDF File </span>
                </div>
                <span className="block text-gray-400 text-sm">
                  Max Upload 10.0 MB
                </span>
              </div>

              <div className="text-sm flex items-center justify-between w-1/4 ml-75p">
                <button
                  type="submit"
                  className="px-3 py-2 rounded-sm bg-blue-200 text-blue-800"
                  onClick={() => {
                    null;
                  }}
                >
                  Save Draft
                </button>
                <button
                  type="submit"
                  className="px-3 py-2 rounded-sm bg-blue-800 text-white"
                  onClick={() => {
                    null;
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
