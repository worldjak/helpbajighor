/* eslint-disable react/no-unescaped-entities */
import { useLanguageStore } from "@/store/useLanguageStore";
import React from "react";

const RulesAndRegulations = () => {
  const { language } = useLanguageStore((state) => state);
  return (
    <>
      {language === "en" ? (
        <div className="bg-[#357d61] py-10 px-6 sm:px-10 lg:px-20">
          <div className="w-full mx-auto bg-transparent shadow-md rounded-lg p-8 border border-gray-400">
            <h1 className="text-2xl font-bold text-white mb-4">
              Rules and Regulations
            </h1>
            <p className="text-white mb-6">
              Effective Date:{" "}
              <span className="font-medium">31 December 2027</span>
            </p>

            {/* General Rules Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                General Rules
              </h2>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>
                  Users must be at least 18 years old to participate in betting
                  or other gambling activities.
                </li>
                <li>
                  All users are required to register and provide accurate
                  information during the registration process.
                </li>
                <li>
                  Users must comply with all applicable laws and regulations in
                  their jurisdiction.
                </li>
                <li>
                  The platform reserves the right to suspend or terminate
                  accounts found in violation of any rules.
                </li>
              </ul>
            </section>

            {/* Account Responsibilities Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Account Responsibilities
              </h2>
              <p className="text-white">
                It is the user's responsibility to ensure the confidentiality of
                their account credentials. All activities under a user's account
                are their responsibility, and they must notify us immediately in
                the case of any unauthorized use or security breaches.
              </p>
            </section>

            {/* Prohibited Activities Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Prohibited Activities
              </h2>
              <p className="text-white mb-4">
                The following activities are strictly prohibited:
              </p>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>Engaging in fraudulent or illegal activities.</li>
                <li>Manipulating the system for unfair advantages.</li>
                <li>
                  Attempting to interfere with or disrupt the platform's
                  operations.
                </li>
                <li>Sharing your account login details with others.</li>
                <li>Using bots or automated systems to place bets.</li>
              </ul>
            </section>

            {/* Betting and Transaction Rules Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Betting and Transactions
              </h2>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>
                  All bets must be placed using the funds in the user's account.
                </li>
                <li>
                  Users may not place any bet that exceeds the available balance
                  in their account.
                </li>
                <li>
                  The platform reserves the right to cancel or void bets in the
                  event of technical failures or errors.
                </li>
                <li>
                  Any suspicious transactions may be subject to investigation,
                  and users may be asked to provide identification and proof of
                  funds.
                </li>
              </ul>
            </section>

            {/* Limitation of Liability Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Limitation of Liability
              </h2>
              <p className="text-white">
                The platform is not responsible for any losses or damages
                arising from your use of the website or services, including, but
                not limited to:
              </p>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>Service interruptions or downtime.</li>
                <li>Unauthorized access to accounts or information.</li>
                <li>Losses from betting, transactions, or deposits.</li>
              </ul>
              <p className="text-white mt-4">
                Our liability is limited to the fullest extent permitted by law.
              </p>
            </section>

            {/* Amendments to Rules Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Amendments to Rules
              </h2>
              <p className="text-white">
                We reserve the right to modify these rules at any time. Users
                will be notified of any changes via email or website updates.
                Continued use of our services constitutes acceptance of the
                updated rules.
              </p>
            </section>

            {/* Contact Section */}
            <p className="text-white text-sm">
              If you have any questions about these Rules and Regulations,
              contact us at{" "}
              <a
                href="mailto:support@bajighor88.com"
                className="text-blue-300 hover:underline"
              >
                support@bajighor88.com
              </a>
              .
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-[#357d61] py-10 px-6 sm:px-10 lg:px-20">
          <div className="w-full mx-auto bg-transparent shadow-md rounded-lg p-8 border border-gray-400">
            <h1 className="text-2xl font-bold text-white mb-4">নিয়মাবলী</h1>
            <p className="text-white mb-6">
              কার্যকর তারিখ:{" "}
              <span className="font-medium">৩১ ডিসেম্বর ২০২৭</span>
            </p>

            {/* সাধারণ নিয়ম বিভাগ */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                সাধারণ নিয়ম
              </h2>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>
                  জুয়া খেলা বা অন্যান্য গেমিং কার্যক্রমে অংশগ্রহণের জন্য
                  ব্যবহারকারীদের কমপক্ষে ১৮ বছর বয়স হতে হবে।
                </li>
                <li>
                  সব ব্যবহারকারীকে নিবন্ধনের সময় সঠিক তথ্য প্রদান করতে হবে।
                </li>
                <li>
                  ব্যবহারকারীদের তাদের অবস্থান অনুযায়ী সমস্ত প্রযোজ্য আইন এবং
                  বিধি মেনে চলতে হবে।
                </li>
                <li>
                  প্ল্যাটফর্ম যে কোনো নিয়ম লঙ্ঘনের ক্ষেত্রে অ্যাকাউন্ট স্থগিত
                  বা বন্ধ করার অধিকার সংরক্ষণ করে।
                </li>
              </ul>
            </section>

            {/* অ্যাকাউন্ট দায়িত্ব বিভাগ */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                অ্যাকাউন্টের দায়িত্ব
              </h2>
              <p className="text-white">
                ব্যবহারকারীর দায়িত্ব তাদের অ্যাকাউন্টের তথ্য গোপন রাখা।
                অ্যাকাউন্টের অধীনে সকল কার্যক্রম ব্যবহারকারীর দায়িত্ব এবং যে
                কোনো অননুমোদিত ব্যবহার বা নিরাপত্তা লঙ্ঘনের ক্ষেত্রে অবিলম্বে
                আমাদের জানাতে হবে।
              </p>
            </section>

            {/* নিষিদ্ধ কার্যক্রম বিভাগ */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                নিষিদ্ধ কার্যক্রম
              </h2>
              <p className="text-white mb-4">
                নিম্নলিখিত কার্যক্রম কঠোরভাবে নিষিদ্ধ:
              </p>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>প্রতারণামূলক বা অবৈধ কার্যক্রমে অংশগ্রহণ।</li>
                <li>অন্যায় সুবিধা লাভের জন্য সিস্টেমে হস্তক্ষেপ।</li>
                <li>প্ল্যাটফর্মের কার্যক্রম বাধাগ্রস্ত করার চেষ্টা।</li>
                <li>অ্যাকাউন্টের লগইন তথ্য অন্যদের সাথে ভাগ করা।</li>
                <li>বট বা স্বয়ংক্রিয় সিস্টেম ব্যবহার করে বাজি ধরা।</li>
              </ul>
            </section>

            {/* বাজি এবং লেনদেনের নিয়ম বিভাগ */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                বাজি এবং লেনদেনের নিয়ম
              </h2>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>
                  সব বাজি ব্যবহারকারীর অ্যাকাউন্টের অর্থ ব্যবহার করে স্থাপন করতে
                  হবে।
                </li>
                <li>
                  ব্যবহারকারীরা তাদের অ্যাকাউন্টে উপলব্ধ ব্যালেন্সের চেয়ে বেশি
                  বাজি রাখতে পারবেন না।
                </li>
                <li>
                  কারিগরি ত্রুটি বা ভুলের ক্ষেত্রে প্ল্যাটফর্ম বাজি বাতিল বা
                  অকার্যকর করার অধিকার সংরক্ষণ করে।
                </li>
                <li>
                  যে কোনো সন্দেহজনক লেনদেন তদন্তের বিষয় হতে পারে এবং
                  ব্যবহারকারীদের পরিচয়পত্র ও অর্থের প্রমাণ প্রদান করতে বলা হতে
                  পারে।
                </li>
              </ul>
            </section>

            {/* দায়-সীমাবদ্ধতা বিভাগ */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                দায়-সীমাবদ্ধতা
              </h2>
              <p className="text-white">
                প্ল্যাটফর্ম আপনার ওয়েবসাইট বা পরিষেবা ব্যবহারের ফলে যে কোনো
                ক্ষতি বা সমস্যার জন্য দায়ী নয়, যার মধ্যে রয়েছে:
              </p>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>পরিষেবা বিঘ্ন বা ডাউনটাইম।</li>
                <li>অ্যাকাউন্ট বা তথ্যের অননুমোদিত অ্যাক্সেস।</li>
                <li>বাজি, লেনদেন বা জমা থেকে হওয়া ক্ষতি।</li>
              </ul>
              <p className="text-white mt-4">
                আমাদের দায় আইনত অনুমোদিত সর্বোচ্চ সীমা পর্যন্ত সীমাবদ্ধ।
              </p>
            </section>

            {/* নিয়ম পরিবর্তনের অধিকার বিভাগ */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                নিয়ম পরিবর্তনের অধিকার
              </h2>
              <p className="text-white">
                আমরা যে কোনো সময় এই নিয়ম পরিবর্তন করার অধিকার সংরক্ষণ করি।
                ব্যবহারকারীদের ইমেল বা ওয়েবসাইট আপডেটের মাধ্যমে পরিবর্তনের
                বিষয়ে জানানো হবে। আমাদের পরিষেবাগুলির ব্যবহার চালিয়ে যাওয়া
                মানেই আপডেটেড নিয়ম গ্রহণ করা।
              </p>
            </section>

            {/* যোগাযোগ বিভাগ */}
            <p className="text-white text-sm">
              এই নিয়মাবলী সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন{" "}
              <a
                href="mailto:support@bajighor88.com"
                className="text-blue-300 hover:underline"
              >
                support@bajighor88.com
              </a>{" "}
              এ।
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default RulesAndRegulations;
