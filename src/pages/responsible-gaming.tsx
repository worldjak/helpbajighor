import { useLanguageStore } from "@/store/useLanguageStore";
import React from "react";

const ResponsibleGaming = () => {
  const { language } = useLanguageStore((state) => state);
  return (
    <>
      {language === "en" ? (
        <div className="bg-[#357d61] py-10 px-6 sm:px-10 lg:px-20">
          <div className="w-full mx-auto bg-transparent shadow-md rounded-lg p-8 border border-gray-400">
            <h1 className="text-2xl font-bold text-white mb-4">
              Responsible Gaming
            </h1>
            <p className="text-white mb-6">
              Last Updated: <span className="font-medium">15 January 2025</span>
            </p>
            <section className="mb-8">
              <p className="text-white">
                At <span className="font-bold">bajighor88.com</span>, we are
                committed to promoting responsible gaming practices to ensure
                that gambling remains a source of fun and entertainment. While
                the majority of our users enjoy gambling responsibly, we
                recognize that for some, gambling can have adverse effects. This
                page provides guidance and resources to help you gamble
                responsibly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Key Principles of Responsible Gaming
              </h2>
              <p className="text-white">
                Responsible gaming is about staying in control of your gambling
                habits. We encourage our users to:
              </p>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>
                  Set deposit and time limits to manage gambling effectively.
                </li>
                <li>Ensure gambling remains a recreational activity.</li>
                <li>
                  Avoid chasing losses or gambling under stress or pressure.
                </li>
                <li>Seek support if gambling starts to feel overwhelming.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Tools for Responsible Gambling
              </h2>
              <h3 className="text-lg font-medium text-white mb-2">
                Deposit Limits
              </h3>
              <p className="text-white mb-4">
                Before starting to gamble, set a deposit limit based on your
                financial situation. Play with amounts that are within your
                budget and for entertainment purposes only.
              </p>
              <h3 className="text-lg font-medium text-white mb-2">
                Time Management
              </h3>
              <p className="text-white mb-4">
                Set a time limit for your gambling sessions and stick to it.
                Balance gambling with other activities and hobbies.
              </p>
              <h3 className="text-lg font-medium text-white mb-2">
                Breaks and Self-Awareness
              </h3>
              <p className="text-white mb-4">
                Take regular breaks and avoid gambling when tired, stressed, or
                under the influence of substances such as alcohol or drugs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Protecting Minors
              </h2>
              <p className="text-white mb-4">
                Our platform is strictly for users aged 18 and older. To prevent
                unauthorized access by minors, we recommend using parental
                control software and filters. For guidance, explore tools like{" "}
                <a
                  href="https://famisafe.wondershare.com/internet-filter/best-internet-filters.html"
                  className="text-blue-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FamiSafe
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Self-Exclusion
              </h2>
              <p className="text-white mb-4">
                If you need to take a break from gambling, you can request
                self-exclusion. During this period, you will be unable to access
                your account or create new accounts. Self-exclusion is available
                for durations between 6 months and 5 years, based on your
                preference.
              </p>
              <p className="text-white">
                To request self-exclusion, contact our customer support team via
                email:
              </p>
              <p className="text-white">
                <a
                  href="mailto:support@bajighor88.com"
                  className="text-blue-300 hover:underline"
                >
                  support@bajighor88.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Support and Resources
              </h2>
              <p className="text-white">
                If you are concerned about your gambling habits, take a
                self-test to assess your risk:
              </p>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>
                  <a
                    href="https://www.begambleaware.org/gambling-problems/do-i-have-a-gambling-problem/"
                    className="text-blue-300 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Self-Test: Do I Have a Gambling Problem?
                  </a>
                </li>
                <li>
                  Find additional resources at{" "}
                  <a
                    href="https://www.begambleaware.org/safer-gambling/"
                    className="text-blue-300 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BeGambleAware
                  </a>
                  .
                </li>
              </ul>
            </section>

            <p className="text-white text-sm">
              For further assistance, contact our support team at{" "}
              <a
                href="mailto:info@bajighor88.com"
                className="text-blue-300 hover:underline"
              >
                info@bajighor88.com
              </a>
              . We are here to help 24/7.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-[#357d61] py-10 px-6 sm:px-10 lg:px-20">
          <div className="w-full mx-auto bg-transparent shadow-md rounded-lg p-8 border border-gray-400">
            <h1 className="text-2xl font-bold text-white mb-4">
              দায়িত্বশীল গেমিং
            </h1>
            <p className="text-white mb-6">
              সর্বশেষ আপডেট:{" "}
              <span className="font-medium">১৫ জানুয়ারি ২০২৫</span>
            </p>
            <section className="mb-8">
              <p className="text-white">
                <span className="font-bold">bajighor88.com</span>-এ আমরা
                দায়িত্বশীল গেমিং চর্চা প্রচারের জন্য প্রতিশ্রুতিবদ্ধ, যাতে
                জুয়া খেলা মজার এবং বিনোদনমূলক থাকে। আমাদের বেশিরভাগ ব্যবহারকারী
                দায়িত্বশীলভাবে জুয়া খেলে উপভোগ করেন, তবে আমরা স্বীকার করি যে
                কিছু ক্ষেত্রে জুয়া খেলা নেতিবাচক প্রভাব ফেলতে পারে। এই পৃষ্ঠাটি
                আপনাকে দায়িত্বশীলভাবে জুয়া খেলার জন্য নির্দেশিকা এবং সংস্থান
                প্রদান করে।
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                দায়িত্বশীল গেমিং এর মূল নীতিমালা
              </h2>
              <p className="text-white">
                দায়িত্বশীল গেমিং মানে আপনার জুয়া খেলার অভ্যাস নিয়ন্ত্রণে
                রাখা। আমরা আমাদের ব্যবহারকারীদের উৎসাহিত করি:
              </p>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>জুয়া খেলার জন্য জমা এবং সময় সীমা নির্ধারণ করুন।</li>
                <li>জুয়া খেলা শুধুমাত্র বিনোদনের মাধ্যম হিসেবে রাখুন।</li>
                <li>
                  ক্ষতি পুষিয়ে নেওয়ার চেষ্টা করবেন না বা চাপের মধ্যে জুয়া
                  খেলবেন না।
                </li>
                <li>জুয়া খেলা নিয়ন্ত্রণের বাইরে গেলে সহায়তা নিন।</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                দায়িত্বশীল গেমিং এর সরঞ্জাম
              </h2>
              <h3 className="text-lg font-medium text-white mb-2">জমা সীমা</h3>
              <p className="text-white mb-4">
                জুয়া খেলা শুরু করার আগে আপনার আর্থিক অবস্থার ভিত্তিতে একটি জমা
                সীমা নির্ধারণ করুন। আপনার বাজেটের মধ্যে এবং শুধুমাত্র বিনোদনের
                জন্য খেলা চালিয়ে যান।
              </p>
              <h3 className="text-lg font-medium text-white mb-2">
                সময়ের ব্যবস্থাপনা
              </h3>
              <p className="text-white mb-4">
                আপনার জুয়া খেলার সেশনের জন্য একটি সময় সীমা নির্ধারণ করুন এবং
                এটি মেনে চলুন। জুয়া খেলার পাশাপাশি অন্যান্য কার্যক্রম এবং শখ
                বজায় রাখুন।
              </p>
              <h3 className="text-lg font-medium text-white mb-2">
                বিরতি এবং আত্ম-সচেতনতা
              </h3>
              <p className="text-white mb-4">
                নিয়মিত বিরতি নিন এবং ক্লান্ত, চাপগ্রস্ত বা অ্যালকোহল বা মাদকের
                প্রভাবে থাকাকালীন জুয়া খেলা এড়িয়ে চলুন।
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                কিশোরদের সুরক্ষা
              </h2>
              <p className="text-white mb-4">
                আমাদের প্ল্যাটফর্ম শুধুমাত্র ১৮ বছর বা তার বেশি বয়সী
                ব্যবহারকারীদের জন্য। কিশোরদের অননুমোদিত অ্যাক্সেস প্রতিরোধ করতে,
                আমরা প্যারেন্টাল কন্ট্রোল সফটওয়্যার এবং ফিল্টার ব্যবহার করার
                পরামর্শ দিই। গাইডেন্সের জন্য,{" "}
                <a
                  href="https://famisafe.wondershare.com/internet-filter/best-internet-filters.html"
                  className="text-blue-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FamiSafe
                </a>{" "}
                এর মতো সরঞ্জাম ব্যবহার করুন।
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                স্ব-বিরতি
              </h2>
              <p className="text-white mb-4">
                যদি আপনার জুয়া খেলা থেকে বিরতি প্রয়োজন হয়, আপনি স্ব-বিরতির
                জন্য অনুরোধ করতে পারেন। এই সময়কালে, আপনি আপনার অ্যাকাউন্টে
                প্রবেশ করতে বা নতুন অ্যাকাউন্ট তৈরি করতে পারবেন না। স্ব-বিরতি ৬
                মাস থেকে ৫ বছর পর্যন্ত আপনার পছন্দ অনুযায়ী নির্ধারণ করা যায়।
              </p>
              <p className="text-white">
                স্ব-বিরতির জন্য অনুরোধ করতে আমাদের কাস্টমার সাপোর্ট টিমের সাথে
                ইমেলের মাধ্যমে যোগাযোগ করুন:
              </p>
              <p className="text-white">
                <a
                  href="mailto:support@bajighor88.com"
                  className="text-blue-300 hover:underline"
                >
                  support@bajighor88.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                সহায়তা ও সম্পদ
              </h2>
              <p className="text-white">
                যদি আপনি আপনার জুয়া খেলার অভ্যাস নিয়ে উদ্বিগ্ন হন, একটি
                স্ব-পরীক্ষা নিন এবং আপনার ঝুঁকি মূল্যায়ন করুন:
              </p>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>
                  <a
                    href="https://www.begambleaware.org/gambling-problems/do-i-have-a-gambling-problem/"
                    className="text-blue-300 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    স্ব-পরীক্ষা: আমার কি জুয়া সংক্রান্ত সমস্যা রয়েছে?
                  </a>
                </li>
                <li>
                  অতিরিক্ত সংস্থান খুঁজুন{" "}
                  <a
                    href="https://www.begambleaware.org/safer-gambling/"
                    className="text-blue-300 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BeGambleAware
                  </a>{" "}
                  এ।
                </li>
              </ul>
            </section>

            <p className="text-white text-sm">
              আরও সহায়তার জন্য, আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন{" "}
              <a
                href="mailto:info@bajighor88.com"
                className="text-blue-300 hover:underline"
              >
                info@bajighor88.com
              </a>{" "}
              এ। আমরা ২৪/৭ সহায়তা প্রদান করি।
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsibleGaming;
