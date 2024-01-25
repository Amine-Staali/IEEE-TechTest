import AnotherSection from "./AnotherSection";
import GoBackButton from "./GoBackButton";
interface Props {
  fct: (n: number) => void;
  n: number;
}

export default function ContentOne({ fct, n }: Props) {
  return (
    <div className="ml-24 mt-14 mb-14">
      <GoBackButton />
      <AnotherSection n={n}/>
      <div className="ml-27p">
        <div className="w-9/12 bg-gray-100 shadow-md rounded-lg px-5 py-8 ">
          <span>
            <span className="text-lg font-semibold">
              Rules and Acknowledgement
            </span>
            <br />
            <br />
            <span className="">Your 10 keys to receive funds :</span>
            <br />
            <br />
            <ul className="text-sm list-decimal w-11/12 m-auto">
              <li>
                The unit's treasurer and chair should keep their own financial
                report (incomes & expenses) and verify that they have sufficient
                funds before submitting the payment / reimbursement request. The
                unit's treasurer and chair should give their financial report to
                the next officers of their unit.
              </li>
              <li>
                In case of reimbursement request (reimbursement means that the
                services were already payed and the event was organized), a
                report with photos and the list of participants (name, IEEE
                member (yes/no), email) must be uploaded in the request.
                Otherwise, the reimbursement will not be done.
              </li>
              <li>
                In case of payment request (payment means a direct money
                transfer from the Tunisia section to the provider bank account),
                a report with photos and the list of participants (name, IEEE
                member (yes/no), email) must be sent to{" "}
                <span className="text-blue-700 underline">
                  tunisia-officers@ieee.org
                </span>{" "}
                within 7 days after the event. Otherwise, the section will not
                be able to help the unit in the future, even if they have
                sufficient funds in the section bank account.
              </li>
              <li>
                The Tunisia section needs at the minimum 15 days to complete
                your request. No urgent payements could be done. All requests
                should be submitted well in advance.
              </li>
              <li>
                5- In cas of invoices with an amount over 100 TND, the forum
                must include 3 quotes (devis) from different providers. Please
                clarify if you are not selecting the lowest price, in the
                description of expenses field above. You should ask for payment
                option in order to pay directly the provider and avoid the
                reimbursement option.
              </li>
              <li>
                6- No clear invoices will not be paid or reimbursed. All
                invoices must be billed to "IEEE Tunisia section" (and clearly
                include section's tax id 1496298 T P N 000), including the word
                "Facture", clear details of the provider, stamp, and signature.
                Otherwise, the payment/reimbursement can't be done.
              </li>
              <li>
                The unit's chair/treasurer should collect all original invoices
                and give them to the section treasurer by 31 December every
                year. Otherwise, the section will not be able to help the unit
                in the future.
              </li>
              <li>
                if the expenses includes a restaurant invoice, the request
                should includes ALL the names, IEEE id, and emails of the
                beneficiary persons.
              </li>
              <li>
                The request will be automatically declined if one of the emails
                of the officers are wrong.
              </li>
              <li>
                The unit's website should be updated and includes the call for
                participation to the related event. Further more, an e-notice
                call for participation should be sent via
                enotice.vtools.ieee.org
              </li>
            </ul>
          </span>
          <form
            onSubmit={(e: { preventDefault: () => void }) => {
              e.preventDefault();
              fct(n);
            }}
          >
            <div className="flex">
              <input type="checkbox" required />
              <span className="text-xs ml-3 mt-4">
                By ticking, you are confirming that you have read, understood
                and agree to the requests rules and conditions, and acknowledge
                the{" "}
                <a
                  href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/about/corporate/ieee-code-of-ethics.pdf"
                  className="text-blue-700 underline"
                >
                  IEEE Code of Ethics
                </a>
              </span>
            </div>
            <button
              type="submit"
              className="px-3 py-2 mt-5 ml-84p rounded-lg bg-blue-800 text-white"
            >
              Proceed
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
