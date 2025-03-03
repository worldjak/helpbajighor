import { useLanguageStore } from "@/store/useLanguageStore";
import React from "react";

const TermsAndConditions = () => {
  const { language } = useLanguageStore((state) => state);
  return (
    <>
      {language === "en" ? (
        <div className="bg-[#357d61] py-10 px-6 sm:px-10 lg:px-20">
          <div className="w-full mx-auto bg-transparent shadow-md rounded-lg p-8 border border-gray-400">
            <h1 className="text-2xl font-bold text-white mb-4">
              Terms and Conditions
            </h1>
            <p className="text-white mb-6">
              Effective Date:{" "}
              <span className="font-medium">31 December 2027</span>
            </p>
            <section className="mb-8">
              <p className="text-white">
                Welcome to <span className="font-bold">bajighor88.com</span>. By
                accessing or using our website and services, you agree to comply
                with these Terms and Conditions. Please read them carefully as
                they govern your use of our platform.
              </p>
              <p className="text-white mt-4">
                If you do not agree to these terms, you must not use our
                services. We reserve the right to update or modify these Terms
                and Conditions at any time without prior notice.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Eligibility
              </h2>
              <p className="text-white">To use our services, you must:</p>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>
                  Be at least 18 years old or the legal age in your
                  jurisdiction.
                </li>
                <li>
                  Provide accurate, complete, and up-to-date information during
                  the registration process.
                </li>
                <li>Comply with all applicable laws and regulations.</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Account Responsibilities
              </h2>
              <p className="text-white">
                You are responsible for maintaining the confidentiality of your
                account credentials. Activities under your account are your
                responsibility, and you must notify us immediately of any
                unauthorized use or security breach.
              </p>
              <p className="text-white mt-4">
                We reserve the right to suspend or terminate accounts found in
                violation of these Terms and Conditions.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Prohibited Activities
              </h2>
              <p className="text-white mb-4">
                Users are prohibited from engaging in activities that include,
                but are not limited to:
              </p>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>Fraudulent or illegal activities.</li>
                <li>Manipulating the system to gain unfair advantages.</li>
                <li>
                  Attempting to disrupt the functionality or security of the
                  platform.
                </li>
                <li>Sharing your account credentials with others.</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Limitation of Liability
              </h2>
              <p className="text-white">
                We are not responsible for any losses or damages arising from
                your use of our platform, including but not limited to:
              </p>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>Service interruptions or errors.</li>
                <li>Unauthorized access to your account.</li>
                <li>
                  Losses incurred through transactions or bets placed on the
                  platform.
                </li>
              </ul>
              <p className="text-white mt-4">
                Our liability is limited to the fullest extent permitted by law.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Amendments to Terms
              </h2>
              <p className="text-white">
                We reserve the right to modify these Terms and Conditions at any
                time. Changes will be communicated via email or a notification
                on our website. Continued use of our services constitutes
                acceptance of the updated terms.
              </p>
            </section>
            <p className="text-white text-sm">
              If you have any questions about these Terms and Conditions,
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
            <h1 className="text-2xl font-bold text-white mb-4">শর্তাবলী</h1>
            <p className="text-white mb-6">
              কার্যকর তারিখ:{" "}
              <span className="font-medium">৩১ ডিসেম্বর ২০২৭</span>
            </p>
            <section className="mb-8">
              <p className="text-white">
                <span className="font-bold">bajighor88.com</span>-এ স্বাগতম।
                আমাদের ওয়েবসাইট এবং সেবা ব্যবহার করে, আপনি এই শর্তাবলীর সাথে
                সম্মত হচ্ছেন। অনুগ্রহ করে এগুলি মনোযোগ দিয়ে পড়ুন কারণ এগুলি
                আমাদের প্ল্যাটফর্ম ব্যবহারের নিয়ম শাসন করে।
              </p>
              <p className="text-white mt-4">
                আপনি যদি এই শর্তাবলীতে সম্মত না হন, তবে আমাদের পরিষেবাগুলি
                ব্যবহার করা উচিত নয়। আমরা পূর্ব বিজ্ঞপ্তি ছাড়াই যে কোনো সময়
                এই শর্তাবলীতে আপডেট বা পরিবর্তন করার অধিকার সংরক্ষণ করি।
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">যোগ্যতা</h2>
              <p className="text-white">
                আমাদের পরিষেবাগুলি ব্যবহার করার জন্য আপনাকে:
              </p>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>অন্তত ১৮ বছর বয়সী বা আপনার অঞ্চলে আইনগত বয়স হতে হবে।</li>
                <li>
                  নিবন্ধন প্রক্রিয়ার সময় সঠিক, সম্পূর্ণ এবং সর্বশেষ তথ্য
                  প্রদান করতে হবে।
                </li>
                <li>সকল প্রযোজ্য আইন ও বিধিবিধান মেনে চলতে হবে।</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                অ্যাকাউন্ট দায়িত্ব
              </h2>
              <p className="text-white">
                আপনার অ্যাকাউন্টের শংসাপত্রের গোপনীয়তা বজায় রাখার দায়িত্ব
                আপনার। আপনার অ্যাকাউন্টের অধীনে কার্যক্রম আপনার দায়িত্ব এবং
                আপনার অনুমতি ব্যতীত কোনো ব্যবহার বা নিরাপত্তা লঙ্ঘনের বিষয়ে
                আমাদের অবহিত করতে হবে।
              </p>
              <p className="text-white mt-4">
                আমাদের এই শর্তাবলী লঙ্ঘনের সাথে জড়িত অ্যাকাউন্ট স্থগিত বা বাতিল
                করার অধিকার সংরক্ষিত আছে।
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                নিষিদ্ধ কার্যক্রম
              </h2>
              <p className="text-white mb-4">
                ব্যবহারকারীরা নিম্নলিখিত কার্যক্রমে লিপ্ত হওয়া থেকে বিরত
                থাকবেন:
              </p>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>জালিয়াতি বা অবৈধ কার্যক্রম।</li>
                <li>সিস্টেমকে ম্যানিপুলেট করে অন্যায় সুবিধা অর্জন।</li>
                <li>
                  প্ল্যাটফর্মের কার্যকারিতা বা নিরাপত্তা ব্যাহত করার প্রচেষ্টা।
                </li>
                <li>আপনার অ্যাকাউন্টের শংসাপত্র অন্যদের সাথে শেয়ার করা।</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                দায়বদ্ধতার সীমাবদ্ধতা
              </h2>
              <p className="text-white">
                আমাদের প্ল্যাটফর্ম ব্যবহারের ফলে সৃষ্ট কোনো ক্ষতি বা ক্ষতির জন্য
                আমরা দায়ী নই, যার মধ্যে অন্তর্ভুক্ত:
              </p>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>পরিষেবা ব্যাঘাত বা ত্রুটি।</li>
                <li>আপনার অ্যাকাউন্টে অননুমোদিত প্রবেশ।</li>
                <li>প্ল্যাটফর্মে লেনদেন বা বাজি রাখার মাধ্যমে সৃষ্ট ক্ষতি।</li>
              </ul>
              <p className="text-white mt-4">
                আইন দ্বারা অনুমোদিত সর্বোচ্চ পরিসীমায় আমাদের দায় সীমাবদ্ধ।
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                শর্তাবলীর সংশোধন
              </h2>
              <p className="text-white">
                আমরা যে কোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার সংরক্ষণ করি।
                পরিবর্তন ইমেল বা আমাদের ওয়েবসাইটে একটি বিজ্ঞপ্তির মাধ্যমে
                জানানো হবে। আমাদের পরিষেবাগুলি অব্যাহতভাবে ব্যবহার করা আপডেট
                হওয়া শর্তাবলীর প্রতি আপনার সম্মতির নির্দেশ করে।
              </p>
            </section>
            <p className="text-white text-sm">
              এই শর্তাবলী সম্পর্কে আপনার কোনো প্রশ্ন থাকলে, আমাদের সাথে যোগাযোগ
              করুন:{" "}
              <a
                href="mailto:support@bajighor88.com"
                className="text-blue-300 hover:underline"
              >
                support@bajighor88.com
              </a>
              ।
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default TermsAndConditions;
