import GoBackButton from "./GoBackButton";
import AnotherSection from "./AnotherSection";
interface Props {
  fct1: (n: number) => void;
  n: number;
}
export default function ContentTwo({ fct1, n }: Props) {
  return (
    <div className="ml-24 mt-14 mb-14">
      <GoBackButton />
      <AnotherSection n={n} />
      <div className="ml-27p">
        <div className="w-9/12 bg-gray-100 shadow-md rounded-lg px-5 py-8 ">
          <form
            onSubmit={(e: { preventDefault: () => void }) => {
              e.preventDefault();
              fct1(n);
            }}
          >
            <div className="flex items-center flex-col">
              <input
                className="w-full block mb-2 px-3 bg-gray-200 border border-solid border-gray-300 rounded-sm py-3 "
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
              />
              <input
                className="w-full block mt-2 mb-2 bg-gray-200 border border-solid border-gray-300 rounded-sm px-3 py-3 "
                type="email"
                name="Email"
                placeholder="Email"
                required
              />
              <input
                className="w-full block mt-2 mb-2 bg-gray-200 border border-solid border-gray-300 rounded-sm px-3 py-3 "
                type="text"
                inputMode="numeric"
                placeholder="Phone Number"
                name="phone"
                required
              />
              <input
                className="w-full block mt-2 mb-10 bg-gray-200 border border-solid border-gray-300 rounded-sm px-3 py-3 "
                type="text"
                inputMode="numeric"
                placeholder="IEEE Member Number"
                name="IeeeNum"
                required
              />
            </div>
            <span className="block font-medium mb-5">Role</span>
            <div className="flex items-center mb-5">
              <label htmlFor="Chair" className="mr-11">
                <input className="mr-2" type="radio" name="role" required />
                Chair
              </label>
              <label htmlFor="Treasurer">
                <input className="mr-2" type="radio" name="role" required />
                Treasurer
              </label>
            </div>

            <div className="text-sm flex items-center justify-between w-7/12 ml-41p">
              <button
                type="submit"
                className="px-3 py-2 rounded-sm bg-blue-800 text-white"
                onClick={() => {
                  null;
                }}
              >
                Proceed to Reimbursement
              </button>
              <button
                type="submit"
                className="px-3 py-2 rounded-sm bg-blue-800 text-white"
              >
                Proceed To payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
