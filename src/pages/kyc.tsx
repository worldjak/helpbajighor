/* eslint-disable react/no-unescaped-entities */
import { useLanguageStore } from "@/store/useLanguageStore";
import React from "react";

const KYCPolicy = () => {
  const { language } = useLanguageStore((state) => state);
  return (
    <>
      {language === "en" ? (
        <div className="bg-[#357d61] py-10 px-6 sm:px-10 lg:px-20">
          <div className="w-full mx-auto bg-transparent shadow-md rounded-lg p-8 border border-gray-400">
            <h1 className="text-2xl font-bold text-white mb-4">KYC Policy</h1>
            <p className="text-white mb-6">
              Last Updated: <span className="font-medium">15 January 2025</span>
            </p>
            <section className="mb-8">
              <p className="text-white">
                At <span className="font-bold">bajighor88.com</span>, we are
                dedicated to ensuring compliance with anti-money laundering
                (AML) regulations and maintaining the security of our platform.
                As part of this commitment, users who make lifetime deposits
                exceeding <span className="font-bold">EUR 2000</span> or request
                any withdrawal must complete the KYC process.
              </p>
              <p className="text-white mt-4">
                The KYC process requires providing personal information and
                uploading essential documents for verification. Upon submission,
                users will be granted a “Temporarily Approved” status while our
                KYC Team reviews the documents within 24 hours.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Required Documents
              </h2>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>
                  <span className="font-bold">Government Issued Photo ID:</span>{" "}
                  May require front and back depending on the document.
                </li>
                <li>
                  <span className="font-bold">Selfie with ID:</span> User
                  holding the provided ID document.
                </li>
                <li>
                  <span className="font-bold">Proof of Residence:</span> Bank
                  statement or utility bill issued within the last 3 months.
                </li>
              </ul>
              <p className="text-white mt-4">
                Once submitted, users with “Temporarily Approved” status are
                subject to:
              </p>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>Aggregate deposit limit of EUR 500.</li>
                <li>Withdrawals are not permitted.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                KYC Document Guidelines
              </h2>
              <h3 className="text-lg font-medium text-white mb-2">
                1. Proof of ID
              </h3>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>Must include a signature.</li>
                <li>
                  Issued by a country not in the restricted list (e.g., USA,
                  Netherlands, UK, and others).
                </li>
                <li>Name must match the client’s registered name.</li>
                <li>Document must not expire within the next 3 months.</li>
                <li>User must be over 18 years of age.</li>
              </ul>
              <h3 className="text-lg font-medium text-white mb-2 mt-4">
                2. Proof of Residence
              </h3>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>Must be a bank statement or utility bill.</li>
                <li>
                  Issued by a country not in the restricted list (e.g., USA,
                  Netherlands, UK, and others).
                </li>
                <li>
                  Name must match the client’s registered name and Proof of ID.
                </li>
                <li>Date of issue must be within the last 3 months.</li>
              </ul>
              <h3 className="text-lg font-medium text-white mb-2 mt-4">
                3. Selfie with ID
              </h3>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>Holder must match the individual on the ID document.</li>
                <li>
                  The ID document must match the one provided in “Proof of ID.”
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Unsuccessful KYC Process
              </h2>
              <p className="text-white">
                If the KYC process is unsuccessful, the reason will be
                documented, and a support ticket will be created. The ticket
                number, along with an explanation, will be communicated to the
                user for resolution.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                AML Measures
              </h2>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>
                  Users who fail to pass KYC are restricted from making further
                  deposits or withdrawals.
                </li>
                <li>
                  Upon successful KYC, users are subject to a maximum deposit
                  limit of EUR 2,000 per transaction.
                </li>
                <li>
                  Withdrawals undergo a detailed algorithmic and manual check to
                  ensure compliance with platform rules.
                </li>
                <li>Fund transfers between users are strictly prohibited.</li>
              </ul>
            </section>

            <p className="text-white text-sm">
              For any queries or assistance with the KYC process, please contact
              us at{" "}
              <a
                href="mailto:kyc@bajighor88.com"
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
            <h1 className="text-2xl font-bold text-white mb-4">
              কেওয়াইসি নীতি
            </h1>
            <p className="text-white mb-6">
              সর্বশেষ আপডেট:{" "}
              <span className="font-medium">১৫ জানুয়ারি ২০২৫</span>
            </p>
            <section className="mb-8">
              <p className="text-white">
                <span className="font-bold">bajighor88.com</span>-এ আমরা মানি
                লন্ডারিং প্রতিরোধ আইন (AML) মেনে চলতে এবং আমাদের প্ল্যাটফর্মের
                নিরাপত্তা বজায় রাখতে প্রতিশ্রুতিবদ্ধ। এই প্রতিশ্রুতির অংশ
                হিসাবে, যেসব ব্যবহারকারী{" "}
                <span className="font-bold">২০০০ ইউরো</span> এর বেশি আজীবন জমা
                দেন বা যেকোনো উত্তোলনের অনুরোধ করেন, তাদের কেওয়াইসি প্রক্রিয়া
                সম্পন্ন করতে হবে।
              </p>
              <p className="text-white mt-4">
                কেওয়াইসি প্রক্রিয়ার জন্য ব্যক্তিগত তথ্য প্রদান এবং যাচাইয়ের
                জন্য প্রয়োজনীয় নথি আপলোড করতে হবে। জমা দেওয়ার পরে,
                ব্যবহারকারীদের "সাময়িকভাবে অনুমোদিত" স্থিতি দেওয়া হবে এবং
                আমাদের কেওয়াইসি দল ২৪ ঘণ্টার মধ্যে নথিগুলি পর্যালোচনা করবে।
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                প্রয়োজনীয় নথি
              </h2>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>
                  <span className="font-bold">
                    সরকারি প্রদত্ত ছবি সংবলিত পরিচয়পত্র:
                  </span>{" "}
                  নথি অনুযায়ী সামনে এবং পিছনের প্রয়োজন হতে পারে।
                </li>
                <li>
                  <span className="font-bold">পরিচয়পত্র সহ সেলফি:</span>{" "}
                  ব্যবহারকারী প্রদত্ত পরিচয়পত্র ধারণ করে।
                </li>
                <li>
                  <span className="font-bold">বাসস্থান প্রমাণ:</span> ব্যাংক
                  স্টেটমেন্ট বা গত ৩ মাসের মধ্যে ইস্যুকৃত ইউটিলিটি বিল।
                </li>
              </ul>
              <p className="text-white mt-4">
                জমা দেওয়ার পরে, "সাময়িকভাবে অনুমোদিত" স্থিতি সম্পন্ন
                ব্যবহারকারীরা নিম্নলিখিত শর্ত সাপেক্ষে থাকবেন:
              </p>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>সর্বমোট ৫০০ ইউরো জমা সীমা।</li>
                <li>উত্তোলন অনুমোদিত নয়।</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                কেওয়াইসি নথি নির্দেশিকা
              </h2>
              <h3 className="text-lg font-medium text-white mb-2">
                ১. পরিচয়পত্র প্রমাণ
              </h3>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>স্বাক্ষর থাকতে হবে।</li>
                <li>
                  এমন দেশ থেকে ইস্যু করা যা নিষিদ্ধ তালিকায় নেই (যেমন, মার্কিন
                  যুক্তরাষ্ট্র, নেদারল্যান্ডস, যুক্তরাজ্য ইত্যাদি)।
                </li>
                <li>নাম অবশ্যই ক্লায়েন্টের নিবন্ধিত নামের সাথে মেলাতে হবে।</li>
                <li>নথি আগামী ৩ মাসের মধ্যে মেয়াদোত্তীর্ণ হবে না।</li>
                <li>ব্যবহারকারী অবশ্যই ১৮ বছরের বেশি হতে হবে।</li>
              </ul>
              <h3 className="text-lg font-medium text-white mb-2 mt-4">
                ২. বাসস্থান প্রমাণ
              </h3>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>ব্যাংক স্টেটমেন্ট বা ইউটিলিটি বিল হতে হবে।</li>
                <li>
                  এমন দেশ থেকে ইস্যু করা যা নিষিদ্ধ তালিকায় নেই (যেমন, মার্কিন
                  যুক্তরাষ্ট্র, নেদারল্যান্ডস, যুক্তরাজ্য ইত্যাদি)।
                </li>
                <li>
                  নাম অবশ্যই ক্লায়েন্টের নিবন্ধিত নাম এবং পরিচয়পত্র প্রমাণের
                  সাথে মেলাতে হবে।
                </li>
                <li>ইস্যু করার তারিখ গত ৩ মাসের মধ্যে হতে হবে।</li>
              </ul>
              <h3 className="text-lg font-medium text-white mb-2 mt-4">
                ৩. পরিচয়পত্র সহ সেলফি
              </h3>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>পরিচয়পত্রে থাকা ব্যক্তির সাথে ধারণকারীকে মেলাতে হবে।</li>
                <li>
                  প্রদত্ত পরিচয়পত্র অবশ্যই "পরিচয়পত্র প্রমাণ" হিসাবে
                  প্রদত্তটির সাথে মেলাতে হবে।
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                ব্যর্থ কেওয়াইসি প্রক্রিয়া
              </h2>
              <p className="text-white">
                যদি কেওয়াইসি প্রক্রিয়া ব্যর্থ হয়, তাহলে কারণটি নথিভুক্ত করা
                হবে এবং একটি সাপোর্ট টিকিট তৈরি করা হবে। টিকিট নম্বর এবং
                ব্যাখ্যা ব্যবহারকারীকে সমাধানের জন্য জানানো হবে।
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                এএমএল ব্যবস্থা
              </h2>
              <ul className="list-disc pl-5 text-white space-y-2">
                <li>
                  যারা কেওয়াইসি পাস করতে ব্যর্থ হন তাদের আরও জমা বা উত্তোলন
                  করার অনুমতি নেই।
                </li>
                <li>
                  সফল কেওয়াইসি সম্পন্ন হলে, ব্যবহারকারীরা প্রতি লেনদেনে
                  সর্বাধিক ২০০০ ইউরো জমা সীমার অধীন হবেন।
                </li>
                <li>
                  উত্তোলন প্ল্যাটফর্মের নিয়মাবলীর সাথে সামঞ্জস্য নিশ্চিত করতে
                  বিস্তারিত অ্যালগরিদমিক এবং ম্যানুয়াল চেকের মধ্য দিয়ে যাবে।
                </li>
                <li>ব্যবহারকারীদের মধ্যে তহবিল স্থানান্তর কঠোরভাবে নিষিদ্ধ।</li>
              </ul>
            </section>

            <p className="text-white text-sm">
              কেওয়াইসি প্রক্রিয়া সম্পর্কে যেকোনো প্রশ্ন বা সহায়তার জন্য
              আমাদের সাথে যোগাযোগ করুন:{" "}
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

export default KYCPolicy;
