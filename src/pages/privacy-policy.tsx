/* eslint-disable react/no-unescaped-entities */
import { useLanguageStore } from "@/store/useLanguageStore";
import React from "react";

const PrivacyPolicy = () => {
  const { language } = useLanguageStore((state) => state);
  return (
    <>
      {language === "en" ? (
        <div className="bg-[#357d61] py-10 px-6 sm:px-10 lg:px-20">
          <div className="w-full mx-auto bg-transparent shadow-md rounded-lg p-8 border border-gray-400">
            <h1 className="text-2xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white mb-6">
              Effective Date:{" "}
              <span className="font-medium">31 December 2027</span>
            </p>
            <section className="mb-8">
              <p className="text-white">
                Your privacy is important to us at{" "}
                <span className="font-bold">bajighor88.com</span>. We are
                committed to safeguarding your personal information. This
                Privacy Policy explains how we collect, use, and protect your
                data when you use our website and services.
              </p>
              <p className="text-white mt-4">
                By registering an account, placing bets, or transferring funds
                on <span className="font-bold">bajighor88.com</span>, you confirm
                your acceptance of this Privacy Policy and our Terms and
                Conditions. If you do not agree, please refrain from using our
                website.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Who Controls Your Information?
              </h2>
              <p className="text-white">
                <span className="font-bold">bajighor88.com</span>, along with our
                affiliates and subsidiaries ("we," "us," or "our"), acts as the
                "data controller" for your personal information under applicable
                data protection laws.
              </p>
              <p className="text-white mt-4">
                For privacy-related inquiries, you can contact our{" "}
                <span className="font-bold">Data Protection Officer</span> at:{" "}
                <a
                  href="mailto:privacy@bajighor88.com"
                  className="text-blue-300 hover:underline"
                >
                  privacy@bajighor88.com
                </a>
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Information We Collect
              </h2>
              <h3 className="text-lg font-medium text-white mb-2">
                Personally Identifiable Information
              </h3>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>Full name and username</li>
                <li>Email address</li>
                <li>Residential and billing addresses</li>
                <li>Phone number</li>
                <li>Identification and proof of address documents</li>
                <li>Payment details (e.g., credit/debit card information)</li>
                <li>Transaction history</li>
                <li>Website usage preferences</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                How We Use Your Information
              </h2>
              <p className="text-white mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>
                  Providing services such as account management and transactions
                </li>
                <li>Improving website performance and user experience</li>
                <li>Sending promotional offers (with your consent)</li>
                <li>Security and fraud prevention</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Your Rights
              </h2>
              <p className="text-white mb-4">
                You have several rights regarding your personal information,
                including:
              </p>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>Access and rectification</li>
                <li>Erasure of your personal data</li>
                <li>Updating marketing preferences</li>
                <li>Objecting to certain processing activities</li>
              </ul>
              <p className="text-white mt-4">
                For requests or to exercise your rights, contact us at{" "}
                <a
                  href="mailto:privacy@bajighor88.com"
                  className="text-blue-300 hover:underline"
                >
                  privacy@bajighor88.com
                </a>
                .
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Security Measures
              </h2>
              <p className="text-white">
                We use advanced security measures, including data encryption,
                password protection, and firewalls, to protect your personal
                information.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Updates to this Privacy Policy
              </h2>
              <p className="text-white">
                We may update this policy periodically. Changes will be
                communicated through email or website notifications.
              </p>
            </section>
            <p className="text-white text-sm">
              If you have any questions or concerns about this Privacy Policy,
              contact us at{" "}
              <a
                href="mailto:privacy@bajighor88.com"
                className="text-blue-300 hover:underline"
              >
                privacy@bajighor88.com
              </a>
              .
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-[#357d61] py-10 px-6 sm:px-10 lg:px-20">
          <div className="w-full mx-auto bg-transparent shadow-md rounded-lg p-8 border border-gray-400">
            <h1 className="text-2xl font-bold text-white mb-4">
              গোপনীয়তা নীতি
            </h1>
            <p className="text-white mb-6">
              কার্যকর তারিখ:{" "}
              <span className="font-medium">৩১ ডিসেম্বর ২০২৭</span>
            </p>
            <section className="mb-8">
              <p className="text-white">
                আপনার গোপনীয়তা আমাদের কাছে গুরুত্বপূর্ণ{" "}
                <span className="font-bold">bajighor88.com</span>। আমরা আপনার
                ব্যক্তিগত তথ্য সুরক্ষিত রাখতে প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা
                নীতিতে ব্যাখ্যা করা হয়েছে যে আমরা কীভাবে আপনার ডেটা সংগ্রহ করি,
                ব্যবহার করি এবং সুরক্ষিত রাখি।
              </p>
              <p className="text-white mt-4">
                একটি অ্যাকাউন্ট নিবন্ধন করা, বাজি ধরা বা{" "}
                <span className="font-bold">bajighor88.com</span>-এ অর্থ
                স্থানান্তর করার মাধ্যমে, আপনি এই গোপনীয়তা নীতি এবং আমাদের
                শর্তাবলীর সাথে সম্মতি জানাচ্ছেন। যদি আপনি একমত না হন, অনুগ্রহ
                করে আমাদের ওয়েবসাইট ব্যবহার থেকে বিরত থাকুন।
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                আপনার তথ্য কে নিয়ন্ত্রণ করে?
              </h2>
              <p className="text-white">
                <span className="font-bold">bajighor88.com</span>, আমাদের সহযোগী
                এবং সহায়ক সংস্থার সঙ্গে ("আমরা," "আমাদের"), প্রযোজ্য ডেটা
                সুরক্ষা আইনের অধীনে আপনার ব্যক্তিগত তথ্যের "ডেটা নিয়ন্ত্রক"
                হিসাবে কাজ করে।
              </p>
              <p className="text-white mt-4">
                গোপনীয়তা-সম্পর্কিত অনুসন্ধানের জন্য, আপনি আমাদের{" "}
                <span className="font-bold">তথ্য সুরক্ষা অফিসার</span> এর সাথে
                যোগাযোগ করতে পারেন:{" "}
                <a
                  href="mailto:privacy@bajighor88.com"
                  className="text-blue-300 hover:underline"
                >
                  privacy@bajighor88.com
                </a>
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                আমরা কী তথ্য সংগ্রহ করি
              </h2>
              <h3 className="text-lg font-medium text-white mb-2">
                ব্যক্তিগতভাবে শনাক্তযোগ্য তথ্য
              </h3>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>পূর্ণ নাম এবং ব্যবহারকারীর নাম</li>
                <li>ইমেল ঠিকানা</li>
                <li>বাসস্থানের ঠিকানা এবং বিলিং ঠিকানা</li>
                <li>ফোন নম্বর</li>
                <li>পরিচয়পত্র এবং ঠিকানার প্রমাণপত্র</li>
                <li>পেমেন্টের বিবরণ (যেমন, ক্রেডিট/ডেবিট কার্ডের তথ্য)</li>
                <li>লেনদেনের ইতিহাস</li>
                <li>ওয়েবসাইট ব্যবহারের পছন্দসমূহ</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                আমরা আপনার তথ্য কীভাবে ব্যবহার করি
              </h2>
              <p className="text-white mb-4">
                আমরা নিম্নলিখিত উদ্দেশ্যে আপনার তথ্য ব্যবহার করি:
              </p>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>অ্যাকাউন্ট পরিচালনা এবং লেনদেনের মতো পরিষেবা প্রদান করা</li>
                <li>
                  ওয়েবসাইটের কর্মক্ষমতা এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করা
                </li>
                <li>প্রচারমূলক অফার পাঠানো (আপনার সম্মতিতে)</li>
                <li>নিরাপত্তা এবং প্রতারণা প্রতিরোধ</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                আপনার অধিকারসমূহ
              </h2>
              <p className="text-white mb-4">
                আপনার ব্যক্তিগত তথ্য সম্পর্কিত বেশ কয়েকটি অধিকার রয়েছে, যেমন:
              </p>
              <ul className="list-disc pl-5 text-white space-y-1">
                <li>তথ্য অ্যাক্সেস এবং সংশোধন</li>
                <li>আপনার ব্যক্তিগত ডেটা মুছে ফেলা</li>
                <li>বিপণন পছন্দ আপডেট করা</li>
                <li>নির্দিষ্ট প্রসেসিং কার্যক্রমে আপত্তি করা</li>
              </ul>
              <p className="text-white mt-4">
                অনুরোধ বা আপনার অধিকারগুলি ব্যবহার করার জন্য, আমাদের সাথে
                যোগাযোগ করুন:{" "}
                <a
                  href="mailto:privacy@bajighor88.com"
                  className="text-blue-300 hover:underline"
                >
                  privacy@bajighor88.com
                </a>
                ।
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                সুরক্ষা ব্যবস্থা
              </h2>
              <p className="text-white">
                আমরা উন্নত সুরক্ষা ব্যবস্থা, যেমন ডেটা এনক্রিপশন, পাসওয়ার্ড
                সুরক্ষা, এবং ফায়ারওয়াল ব্যবহার করে আপনার ব্যক্তিগত তথ্য রক্ষা
                করি।
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                এই গোপনীয়তা নীতির আপডেট
              </h2>
              <p className="text-white">
                আমরা এই নীতিটি সময়ে সময়ে আপডেট করতে পারি। পরিবর্তনগুলি ইমেল বা
                ওয়েবসাইট বিজ্ঞপ্তির মাধ্যমে জানানো হবে।
              </p>
            </section>
            <p className="text-white text-sm">
              যদি আপনার এই গোপনীয়তা নীতি সম্পর্কে কোনো প্রশ্ন বা উদ্বেগ থাকে,
              আমাদের সাথে যোগাযোগ করুন:{" "}
              <a
                href="mailto:privacy@bajighor88.com"
                className="text-blue-300 hover:underline"
              >
                privacy@bajighor88.com
              </a>
              ।
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyPolicy;
