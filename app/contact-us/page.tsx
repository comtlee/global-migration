"use client"

import AppInquiryForm from "@/components/templates/AppInquiryForm";
import Service from "@/components/templates/service";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <>
      {/* <div>ContactUs Page</div> */}
      <AppInquiryForm />
      <Service />

      {/* <div className="common-page-visual-area contactus">
      <div className="txt-box">
        <span className="text-uppercase">{{ $t("common.contact-us") }}</span>
        <h1 className="text-pre-line">{{$t("contact.slogan")}}</h1>
        <p className="text-pre-line"> {{ $t("contact.slogan-description") }} </p>
      </div>
    </div>

    <div className="contactus-section-01">
      <div className="contents-line-box">
        <div className="list-box-group">
          <div>
            <div>
              <strong>{{ $t("contact.section01-article01") }}</strong>
              <h1> {{ $t("contact.section01-article01-description") }} </h1>
            </div>
            <button
              className="button-common primary hp-51 size-100"
              onClick="inquiryFormType('service')"
            >
              {{ $t("button.request") }}
            </button>
          </div>
          <div>
            <div>
              <strong>{{ $t("contact.section01-article02") }}</strong>
              <h1> {{ $t("contact.section01-article02-description") }} </h1>
            </div>
            <button className="button-common primary hp-51 size-100 text-capitalize" onClick="inquiryFormType('app')">
              {{ $t("button.share") }}
            </button>
          </div>
          <div>
            <div>
              <strong>{{ $t("contact.section01-article03") }}</strong>
              <h1> {{ $t("contact.section01-article03-description") }} </h1>
            </div>
            <button
              className="button-common fc-ffffff bg-484848 hp-51 size-100"
              onClick="inquiryFormType('collaboration')"
            >
              {{ $t("button.partnership") }}
            </button>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default ContactUs;
