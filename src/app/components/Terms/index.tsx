"use client";
import { TermsMock } from "@/mocks/Terms";

interface TermProps {
  title: string;
  content: string;
}

const Section: React.FC<TermProps> = ({ title, content }) => (
  <section className="mt-14 w-full flex flex-col items-center justify-start overflow-hidden rounded-2xl bg-primary-900 p-6">
    <article className="flex w-full flex-col items-center justify-start gap-2">
      <h1 className="text-2xl font-bold leading-tight text-secondary-50 md:text-3xl">
        {title}
      </h1>
      <p className="text-base leading-8 text-secondary-500">{content}</p>
      {/* Uncomment if needed */}
      {/* <Link
        href={`/post/${EnterpriseMock[1].id}`}
        className="self-end rounded-xl bg-primary-400 px-8 py-4 text-base font-bold leading-5"
      >
        Read more
      </Link> */}
    </article>
  </section>
);

const TermsPage = () => {
  const {
    title,
    Terms,
    Copyright,
    General,
    Limited,
    NoWarranties,
    Limitation,
    Indemnity,
    Refund,
    Delivery,
    Return,
    Cancellation,
    International,
    Disclaimer,
  } = TermsMock[0];

  return (
    <section className="container flex flex-col items-center justify-center">
      <header className="mt-10 flex flex-col items-center justify-center gap-4">
        <h1 className="max-w-2xl text-center text-2xl font-semibold tracking-wider text-primary md:text-3xl">
          Terms of Services
        </h1>
      </header>

      {/* Uncomment if needed */}
      <Section title={title} content={Terms} />
      <Section title="  Copyright And Trademark Notice" content={Copyright} />
      <Section
        title="General Legal Notice And Liability Disclaimer"
        content={General}
      />
      <Section title="Limited License" content={Limited} />
      <Section title="No Warranties" content={NoWarranties} />
      <Section title="Limitation Of Damages" content={Limitation} />
      <Section title="Indemnity" content={Indemnity} />
      <Section title="Refund policy" content={Refund} />
      <Section title="Delivery policy" content={Delivery} />
      <Section title="Return policy" content={Return} />
      <Section title="Cancellation policy" content={Cancellation} />
      <Section
        title="International users and choice of Law"
        content={International}
      />
      <Section title="Disclaimer " content={Disclaimer} />
    </section>
  );
};

export default TermsPage;
