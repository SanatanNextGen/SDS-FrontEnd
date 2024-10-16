"use client";
import { PrivacyMock } from "@/mocks/Privacy";

interface SectionProps {
  title: string;
  content: string;
}

const Section: React.FC<SectionProps> = ({ title, content }) => (
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

const PrivacyPage = () => {
  const {
    title,
    Introduction,
    Information,
    How,
    Use,
    Data,
    DataTransfer,
    ContactUs,
    Security,
    Change,
    DataProtection,
    Laws,
    Retention,
  } = PrivacyMock[0];

  return (
    <section className="container flex flex-col items-center justify-center">
      <header className="mt-10 flex flex-col items-center justify-center gap-4">
        <h1 className="max-w-2xl text-center text-2xl font-semibold tracking-wider text-primary md:text-3xl">
          Privacy Policy of Sanatna Digital Solution (SDS)
        </h1>
      </header>

      {/* Uncomment if needed */}
      <Section title={title} content={Introduction} />
      <Section title="Information We Collect" content={Information} />
      <Section title="How We Collect Information" content={How} />
      <Section title="Use of Your Information" content={Use} />
      <Section title="Data Sharing and Disclosure" content={Data} />
      <Section title="International Data Transfers" content={DataTransfer} />
      <Section title="Security" content={Security} />
      <Section title="Your Data Protection Rights" content={DataProtection} />
      <Section title="Retention of Data" content={Retention} />
      <Section title="Applicable Laws" content={Laws} />
      <Section title="Changes to This Policy" content={Change} />
      <Section title="Contact Us" content={ContactUs} />
    </section>
  );
};

export default PrivacyPage;
