import svgPaths from "./svg-bix1q8uy1z";

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p10ff480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3cb09d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#2563eb] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <Icon />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[58px] relative shrink-0 w-[448px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[42px] relative shrink-0 text-[#0f1729] text-[28px] text-center whitespace-nowrap">Admin Access</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[29px] relative shrink-0 w-[448px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">Sign in to access the content management system</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ContainerMargin />
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Email Address</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p1b122e80} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p17a68100} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] top-[14.5px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[12px] top-0 w-[382px]" data-name="Email Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip pl-[45px] pr-[17px] py-[13px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-full">Enter your email</p>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[47px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <EmailInput />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label />
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Password</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2ebe100} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p160f9700} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] top-[14.5px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[12px] top-0 w-[382px]" data-name="Password Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip pl-[45px] pr-[49px] py-[13px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-full">Enter your password</p>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2f0f2f00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p254f3200} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[344px] p-[4px] rounded-[8px] top-[10.5px]" data-name="Button">
      <Icon3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[47px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <PasswordInput />
      <Button />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-[382px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[16px] relative size-full">
        <Label1 />
        <ContainerMargin3 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#2563eb] h-[46.797px] left-0 rounded-[12px] top-0 w-[382px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.8px] left-[190.66px] not-italic text-[15.2px] text-center text-white top-[12px] whitespace-nowrap">Sign In</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[37px] left-0 top-[62.8px] w-[382px]" data-name="Button">
      <p className="-translate-x-1/2 [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[191.42px] not-italic text-[#64748b] text-[14px] text-center top-[8px] underline whitespace-nowrap">Back to Notes</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[99.797px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container4 />
        <Container7 />
        <Container10 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_10px_rgba(0,0,0,0.08)] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[33px] relative size-full">
        <Form />
      </div>
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[73.91px] size-[12px] top-[3.86px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2b283480} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pbc77700} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.188px] relative shrink-0 w-full" data-name="Paragraph">
      <Icon4 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.2px] left-[232.41px] not-italic text-[#94a3b8] text-[12px] text-center top-0 whitespace-nowrap">Secure admin access · Your credentials are protected</p>
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Container1 />
        <ContainerMargin1 />
        <ContainerMargin4 />
      </div>
    </div>
  );
}

function AdminLogin() {
  return (
    <div className="h-[1111px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(165.251deg, rgb(239, 246, 255) 8.4861%, rgb(240, 253, 250) 58.303%, rgb(250, 250, 250) 91.514%)" }} data-name="AdminLogin">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

export default function Notes() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="NOTES">
      <AdminLogin />
    </div>
  );
}