import svgPaths from "./svg-haus074cq6";

function PlaceholderForApp() {
  return <div className="h-[57px] relative shrink-0 w-[393px]" data-name="Placeholder for App" />;
}

function HeroIcon() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="HeroIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="HeroIcon">
          <path d="M11 6.41667V19.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          <path d={svgPaths.p3e957d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#2563eb] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px]" data-name="Container">
      <HeroIcon />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[4px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[27.5px] relative shrink-0 text-[#0f1729] text-[22px] whitespace-nowrap">Design Thinking</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[297px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#64748b] text-[13px] whitespace-nowrap">A Human-Centered Approach to Innovation</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[11px] top-[2.89px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_13_325)" id="Icon">
          <path d={svgPaths.p1f658e00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p105d7900} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_13_325">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[36.875px] relative shrink-0 w-full" data-name="Container">
      <Icon />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.08px] left-[19px] not-italic text-[#94a3b8] text-[10.72px] top-[0.36px] whitespace-nowrap">Last edited: June 25, 2026</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] left-[162.25px] not-italic text-[#cbd5e1] text-[11.2px] top-0 whitespace-nowrap">·</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.08px] left-0 not-italic text-[#94a3b8] text-[10.72px] top-[20.8px] whitespace-nowrap">7 sections · ~2,800 words</p>
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[297_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="max-w-[768px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start max-w-[inherit] relative size-full">
        <ContainerMargin />
        <Container4 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(178.895deg, rgb(239, 246, 255) 9.7427%, rgb(240, 253, 244) 57.668%, rgb(250, 250, 250) 89.299%)" }} data-name="Container">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[34px] pt-[32px] px-[16px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function SectionHeadingIcon() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SectionHeadingIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SectionHeadingIcon">
          <path d="M7.5 4.375V13.125" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1b79fd00} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(37,99,235,0.09)] relative rounded-[12px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <SectionHeadingIcon />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container8 />
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0f1729] text-[16px] whitespace-nowrap">What is Design Thinking?</p>
      </div>
    </div>
  );
}

function Container9() {
  return <div className="bg-gradient-to-r from-[rgba(37,99,235,0.31)] h-px relative rounded-[4px] shrink-0 to-[rgba(0,0,0,0)] w-full" data-name="Container" />;
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#1e293b] text-[15px] w-[327px]">{`Design Thinking is a human-centered, iterative problem-solving methodology originally developed at Stanford University's d.school and popularized globally by design firm IDEO. It is not merely a design process, it is a mindset and a structured framework that enables teams to approach complex, ambiguous problems by centering the human experience at every stage of the solution process.`}</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#1e293b] text-[15px] w-[327px]">{`At its core, Design Thinking reframes problems from a user's perspective rather than a business or technology perspective. It encourages divergent thinking (generating many possibilities) followed by convergent thinking (selecting the best path forward), cycling through this rhythm repeatedly until a solution is both validated and refined.`}</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#0f1729] text-[0px] w-[327px]">
          <span className="leading-[26px] text-[15px]">Why it matters:</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] text-[#1e293b] text-[15px]">{` Design Thinking is widely adopted across industries, from healthcare and education to financial services, government policy, and software product development, because it dramatically reduces the risk of building solutions that no one wants or needs.`}</span>
        </p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-[327px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[5px] relative size-full">
        <Paragraph1 />
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_2px_rgba(0,0,0,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start px-[17px] py-[21px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f1f5f9] opacity-35 relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.52px] not-italic relative shrink-0 text-[#64748b] text-[11.68px] text-center whitespace-nowrap">← Previous</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.08px] not-italic relative shrink-0 text-[#94a3b8] text-[10.72px] whitespace-nowrap">1 of 7</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#2563eb] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.52px] not-italic relative shrink-0 text-[11.68px] text-center text-white whitespace-nowrap">Next →</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[58px] relative shrink-0 w-[361px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[24px] relative size-full">
        <Button />
        <Text />
        <Button1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="max-w-[768px] relative shrink-0 w-[393px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[16px] py-[24px] relative size-full">
        <Container7 />
        <ContainerMargin2 />
        <ContainerMargin3 />
        <Container12 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 4H14M2 8H14M2 12H14" id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Icon1 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[4px] relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[18.719px] relative shrink-0 w-[107.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[18.72px] relative shrink-0 text-[#1e293b] text-[12.48px] whitespace-nowrap">Design Thinking</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <ButtonMargin />
        <Text1 />
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon">
          <path d="M6.5 9.20833V11.9167" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p2fbc0600} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(37,99,235,0.09)] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[6px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_13_311)" id="Icon">
          <path d={svgPaths.p162e3a00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.2" />
          <path d={svgPaths.pbc77700} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.2" />
        </g>
        <defs>
          <clipPath id="clip0_13_311">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#1e293b] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[6px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[rgba(248,250,252,0.95)] left-0 top-0 w-[393px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13px] pt-[12px] px-[16px] relative size-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f8fafc] h-[852px] min-h-[852px] relative shrink-0 w-[393px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <PlaceholderForApp />
        <Container1 />
        <Container6 />
        <Container13 />
      </div>
    </div>
  );
}

export default function DesignThinkingPresentationSlide() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start relative size-full" data-name="Design Thinking Presentation Slide">
      <Container />
    </div>
  );
}