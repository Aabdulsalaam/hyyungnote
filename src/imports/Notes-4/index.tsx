import svgPaths from "./svg-umazprdcjp";

function StickyPlaceholderAdminPanel() {
  return <div className="h-[79.797px] relative shrink-0 w-full" data-name="Sticky placeholder – AdminPanel" />;
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[22.8px] relative shrink-0 text-[#1e293b] text-[15.2px] whitespace-nowrap">Existing Notes (2)</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 4.08333V12.25" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pdc6cb00} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.188px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#1e293b] text-[12.8px] whitespace-nowrap">Design Thinking</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16.797px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#64748b] text-[11.2px] whitespace-nowrap">7 sections</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[262_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <IconMargin />
        <Container7 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(37,99,235,0.08)] flex-[252_0_0] h-full min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#2563eb] text-[12px] text-center whitespace-nowrap">Edit</p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M1.5 3H10.5" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3ba57a00} id="Vector_2" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p36919d00} id="Vector_3" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 5.5V8.5" id="Vector_4" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 5.5V8.5" id="Vector_5" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#fee2e2] h-full relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[8px] py-[4px] relative size-full">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[13px] relative size-full">
        <Container6 />
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p33035500} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin1() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.188px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#1e293b] text-[12.8px] whitespace-nowrap">Product Development Life Cycle</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16.797px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] not-italic relative shrink-0 text-[#64748b] text-[11.2px] whitespace-nowrap">5 sections</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[262_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <IconMargin1 />
        <Container11 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(245,158,11,0.08)] flex-[252_0_0] h-full min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#f59e0b] text-[12px] text-center whitespace-nowrap">Edit</p>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M1.5 3H10.5" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3ba57a00} id="Vector_2" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p36919d00} id="Vector_3" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 5.5V8.5" id="Vector_4" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 5.5V8.5" id="Vector_5" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#fee2e2] h-full relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[8px] py-[4px] relative size-full">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[13px] relative size-full">
        <Container10 />
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[211.969px] relative shrink-0 w-[310px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[16px] relative size-full">
        <Container5 />
        <Container9 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">New Note</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[18px] py-[10px] relative rounded-[12px] shrink-0 w-[310px]" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#cbd5e1] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <Icon4 />
      <Text />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[16px] relative size-full">
        <Button4 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Heading1 />
        <Container4 />
        <ButtonMargin />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1236.5px] items-start left-0 top-0 w-[352px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[26.4px] relative shrink-0 text-[#1e293b] text-[17.6px] whitespace-nowrap">Create New Note</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[26px] relative shrink-0 w-[678px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#475569] text-[12.8px] whitespace-nowrap">Note Title *</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[39px] relative rounded-[8px] shrink-0 w-[678px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-full">e.g., Design Thinking</p>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label />
        <TextInput />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[26px] relative shrink-0 w-[678px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#475569] text-[12.8px] whitespace-nowrap">Subtitle *</p>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="h-[39px] relative rounded-[8px] shrink-0 w-[678px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-full">e.g., A Human-Centered Approach to Innovation</p>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-[678px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Label1 />
        <TextInput1 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[26px] relative shrink-0 w-[331px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#475569] text-[12.8px] whitespace-nowrap">Icon</p>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[61.188px] items-start left-0 top-0 w-[331px]" data-name="Container">
      <Label2 />
      <Dropdown />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[26px] relative shrink-0 w-[331px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#475569] text-[12.8px] whitespace-nowrap">Color Theme</p>
      </div>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[61.188px] items-start left-[347px] top-0 w-[331px]" data-name="Container">
      <Label3 />
      <Dropdown1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[61.188px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[26px] relative shrink-0 w-[678px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#475569] text-[12.8px] whitespace-nowrap">Word Count</p>
      </div>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="h-[39px] relative rounded-[8px] shrink-0 w-[678px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-full">e.g., ~2,800</p>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-[678px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Label4 />
        <TextInput2 />
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[26px] relative shrink-0 w-[678px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[#475569] text-[12.8px] whitespace-nowrap">Tags (comma-separated)</p>
      </div>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="h-[39px] relative rounded-[8px] shrink-0 w-[678px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-full">e.g., UX, Design, Innovation</p>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-[678px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Label5 />
        <TextInput3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-[678px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container16 />
        <Container17 />
        <ContainerMargin3 />
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[22.8px] relative shrink-0 text-[#1e293b] text-[15.2px] whitespace-nowrap">Sections (1)</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #1D4ED8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 2.91667V11.0833" id="Vector_2" stroke="var(--stroke-0, #1D4ED8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.2px] not-italic relative shrink-0 text-[#1d4ed8] text-[12.8px] text-center whitespace-nowrap">Add Section</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative size-full">
        <Icon5 />
        <Text1 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading3 />
        <Button5 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">SECTION 1</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M1.75 3.5H12.25" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p6d98680} id="Vector_2" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2f25b500} id="Vector_3" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 6.41667V9.91667" id="Vector_4" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.16667 6.41667V9.91667" id="Vector_5" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[4px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text2 />
        <Button6 />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[22px] relative shrink-0 w-[316px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Icon</p>
      </div>
    </div>
  );
}

function Dropdown2() {
  return <div className="absolute border border-[#e2e8f0] border-solid h-[32px] left-0 rounded-[8px] top-0 w-[316px]" data-name="Dropdown" />;
}

function Container30() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Dropdown2 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-0 top-0 w-[316px]" data-name="Container">
      <Label6 />
      <Container30 />
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[22px] relative shrink-0 w-[316px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Color</p>
      </div>
    </div>
  );
}

function ColorPicker() {
  return <div className="absolute border border-[#e2e8f0] border-solid h-[32px] left-0 rounded-[8px] top-0 w-[316px]" data-name="Color Picker" />;
}

function Container32() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ColorPicker />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-[328px] top-0 w-[316px]" data-name="Container">
      <Label7 />
      <Container32 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container29 />
        <Container31 />
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[22px] relative shrink-0 w-[644px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Section Title *</p>
      </div>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="h-[34px] relative rounded-[8px] shrink-0 w-[644px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[9px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-full">e.g., Stage 1 — Empathize</p>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-[644px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Label8 />
        <TextInput4 />
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[21px] relative shrink-0 w-[209.328px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[#64748b] text-[11.2px] whitespace-nowrap">Badge (optional)</p>
      </div>
    </div>
  );
}

function TextInput5() {
  return (
    <div className="absolute h-[26px] left-0 rounded-[4px] top-0 w-[209.328px]" data-name="Text Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[9px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full">Foundation</p>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TextInput5 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50.797px] items-start left-0 top-0 w-[209.328px]" data-name="Container">
      <Label9 />
      <Container36 />
    </div>
  );
}

function Label10() {
  return (
    <div className="h-[21px] relative shrink-0 w-[209.328px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[#64748b] text-[11.2px] whitespace-nowrap">Badge BG</p>
      </div>
    </div>
  );
}

function ColorPicker1() {
  return <div className="absolute border border-[#e2e8f0] border-solid h-[28px] left-0 rounded-[4px] top-0 w-[209.328px]" data-name="Color Picker" />;
}

function Container38() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ColorPicker1 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50.797px] items-start left-[217.33px] top-0 w-[209.328px]" data-name="Container">
      <Label10 />
      <Container38 />
    </div>
  );
}

function Label11() {
  return (
    <div className="h-[21px] relative shrink-0 w-[209.328px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.8px] not-italic relative shrink-0 text-[#64748b] text-[11.2px] whitespace-nowrap">Badge Text</p>
      </div>
    </div>
  );
}

function ColorPicker2() {
  return <div className="absolute border border-[#e2e8f0] border-solid h-[28px] left-0 rounded-[4px] top-0 w-[209.328px]" data-name="Color Picker" />;
}

function Container40() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ColorPicker2 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50.797px] items-start left-[434.66px] top-0 w-[209.328px]" data-name="Container">
      <Label11 />
      <Container40 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[50.797px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container37 />
      <Container39 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Content *</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[78px] size-[18px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M7 11L9 13L11 11H7Z" id="Vector" stroke="var(--stroke-0, #64748B)" />
          <path d="M7 7L9 5L11 7H7Z" id="Vector_2" stroke="var(--stroke-0, #64748B)" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-[12px] rounded-[6px] top-[14px] w-[98px]" data-name="Button">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[22px] left-[8px] not-italic text-[#64748b] text-[14px] top-[4px] whitespace-nowrap">Normal</p>
      <Icon7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[88px] size-[18px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M7 11L9 13L11 11H7Z" id="Vector" stroke="var(--stroke-0, #64748B)" />
          <path d="M7 7L9 5L11 7H7Z" id="Vector_2" stroke="var(--stroke-0, #64748B)" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-[125px] rounded-[6px] top-[14px] w-[108px]" data-name="Button">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[22px] left-[8px] not-italic text-[#64748b] text-[14px] top-[4px] whitespace-nowrap">Sans Serif</p>
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[78px] size-[18px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M7 11L9 13L11 11H7Z" id="Vector" stroke="var(--stroke-0, #64748B)" />
          <path d="M7 7L9 5L11 7H7Z" id="Vector_2" stroke="var(--stroke-0, #64748B)" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-[248px] rounded-[6px] top-[14px] w-[98px]" data-name="Button">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[22px] left-[8px] not-italic text-[#64748b] text-[14px] top-[4px] whitespace-nowrap">Normal</p>
      <Icon9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p200e8e00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p279ed700} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute left-[361px] size-[28px] top-[12px]" data-name="Button">
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.77778 4.44444H14.4444" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d="M5.55556 15.5556H12.2222" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p37914900} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute left-[389px] size-[28px] top-[12px]" data-name="Button">
      <Icon11 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pa9c7800} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p319c5b70} fill="var(--fill-0, #64748B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute left-[417px] size-[28px] top-[12px]" data-name="Button">
      <Icon12 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1c9d2a80} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p3b49ce40} fill="var(--fill-0, #64748B)" id="Vector_2" />
          <path d={svgPaths.p34f5bcc0} fill="var(--fill-0, #64748B)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute left-[445px] size-[28px] top-[12px]" data-name="Button">
      <Icon13 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[4px] size-[18px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M3 15H15" id="Vector" opacity="0.4" stroke="var(--stroke-0, #64748B)" />
          <path d="M5.5 11L9 3L12.5 11" id="Vector_2" stroke="var(--stroke-0, #64748B)" />
          <path d="M11.63 9H6.38" id="Vector_3" stroke="var(--stroke-0, #64748B)" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-[488px] rounded-[6px] top-[14px] w-[28px]" data-name="Button">
      <Icon14 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[4px] size-[18px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <g id="Group">
            <path d={svgPaths.p34901c00} fill="var(--fill-0, #64748B)" id="Vector" />
            <path d="M5 4H4V5H5V4Z" fill="var(--fill-0, #64748B)" id="Vector_2" />
            <path d="M6.817 5H6V6H6.38L6.817 5Z" fill="var(--fill-0, #64748B)" id="Vector_3" />
            <path d="M3 6H2V7H3V6Z" fill="var(--fill-0, #64748B)" id="Vector_4" />
            <path d="M4 5H3V6H4V5Z" fill="var(--fill-0, #64748B)" id="Vector_5" />
            <path d="M5 7H4V8H5V7Z" fill="var(--fill-0, #64748B)" id="Vector_6" />
            <path d={svgPaths.p12b89c80} fill="var(--fill-0, #64748B)" id="Vector_7" />
            <path d="M3 12H2V13H3V12Z" fill="var(--fill-0, #64748B)" id="Vector_8" />
            <path d="M3 9H2V10H3V9Z" fill="var(--fill-0, #64748B)" id="Vector_9" />
            <path d="M3 15H2V16H3V15Z" fill="var(--fill-0, #64748B)" id="Vector_10" />
            <path d="M4.63 10H4V11H4.192L4.63 10Z" fill="var(--fill-0, #64748B)" id="Vector_11" />
            <path d="M4 8H3V9H4V8Z" fill="var(--fill-0, #64748B)" id="Vector_12" />
            <path d={svgPaths.p2ea8af80} fill="var(--fill-0, #64748B)" id="Vector_13" />
            <path d={svgPaths.p1278cb80} fill="var(--fill-0, #64748B)" id="Vector_14" />
            <path d={svgPaths.p10867b00} fill="var(--fill-0, #64748B)" id="Vector_15" />
            <path d="M13 2H12V3H13V2Z" fill="var(--fill-0, #64748B)" id="Vector_16" />
            <path d="M12 3H11V4H12V3Z" fill="var(--fill-0, #64748B)" id="Vector_17" />
            <path d={svgPaths.p19a7e900} fill="var(--fill-0, #64748B)" id="Vector_18" />
            <path d="M3 3H2V4H3V3Z" fill="var(--fill-0, #64748B)" id="Vector_19" />
            <path d="M7 2H6V3H7V2Z" fill="var(--fill-0, #64748B)" id="Vector_20" />
            <path d="M4 2H3V3H4V2Z" fill="var(--fill-0, #64748B)" id="Vector_21" />
            <path d="M6 3H5V4H6V3Z" fill="var(--fill-0, #64748B)" id="Vector_22" />
            <path d="M10 2H9V3H10V2Z" fill="var(--fill-0, #64748B)" id="Vector_23" />
            <path d="M16 14H15V15H16V14Z" fill="var(--fill-0, #64748B)" id="Vector_24" />
            <path d={svgPaths.p15dd5700} fill="var(--fill-0, #64748B)" id="Vector_25" />
            <path d="M14 7H13V8H14V7Z" fill="var(--fill-0, #64748B)" id="Vector_26" />
            <path d="M16 5H15V6H16V5Z" fill="var(--fill-0, #64748B)" id="Vector_27" />
            <path d="M15 6H14V7H15V6Z" fill="var(--fill-0, #64748B)" id="Vector_28" />
            <path d="M16 8H15V9H16V8Z" fill="var(--fill-0, #64748B)" id="Vector_29" />
            <path d="M15 9H14V10H15V9Z" fill="var(--fill-0, #64748B)" id="Vector_30" />
            <path d={svgPaths.p1c39f100} fill="var(--fill-0, #64748B)" id="Vector_31" />
            <path d="M15 3H14V4H15V3Z" fill="var(--fill-0, #64748B)" id="Vector_32" />
            <path d="M12 6.868V6H11.62L12 6.868Z" fill="var(--fill-0, #64748B)" id="Vector_33" />
            <path d="M16 2H15V3H16V2Z" fill="var(--fill-0, #64748B)" id="Vector_34" />
            <path d="M13 5H12V6H13V5Z" fill="var(--fill-0, #64748B)" id="Vector_35" />
            <path d="M14 4H13V5H14V4Z" fill="var(--fill-0, #64748B)" id="Vector_36" />
            <path d={svgPaths.p144d5200} fill="var(--fill-0, #64748B)" id="Vector_37" />
            <path d="M10 14H9V15H10V14Z" fill="var(--fill-0, #64748B)" id="Vector_38" />
            <path d="M9 15H8V16H9V15Z" fill="var(--fill-0, #64748B)" id="Vector_39" />
            <path d={svgPaths.p2717c180} fill="var(--fill-0, #64748B)" id="Vector_40" />
            <path d="M6 15H5V16H6V15Z" fill="var(--fill-0, #64748B)" id="Vector_41" />
            <path d={svgPaths.p4351e00} fill="var(--fill-0, #64748B)" id="Vector_42" />
            <path d="M12 15H11V16H12V15Z" fill="var(--fill-0, #64748B)" id="Vector_43" />
            <path d={svgPaths.p2fb79900} fill="var(--fill-0, #64748B)" id="Vector_44" />
            <path d="M15 15H14V16H15V15Z" fill="var(--fill-0, #64748B)" id="Vector_45" />
            <path d="M16 11H15V12H16V11Z" fill="var(--fill-0, #64748B)" id="Vector_46" />
          </g>
          <path d="M5.5 13L9 5L12.5 13" id="Vector_47" stroke="var(--stroke-0, #64748B)" />
          <path d="M11.63 11H6.38" id="Vector_48" stroke="var(--stroke-0, #64748B)" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-[516px] rounded-[6px] top-[14px] w-[28px]" data-name="Button">
      <Icon15 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.77778 4.44444H16.6667" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d="M7.77778 10H16.6667" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d="M7.77778 15.5556H16.6667" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d="M2.77778 6.11111H5" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p2edbc880} fill="var(--fill-0, #64748B)" id="Vector_5" />
          <path d={svgPaths.p17b431a0} id="Vector_6" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p1cf82080} id="Vector_7" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute left-[559px] size-[28px] top-[12px]" data-name="Button">
      <Icon16 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 4.44444H16.6667" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d="M6.66667 10H16.6667" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d="M6.66667 15.5556H16.6667" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute left-[587px] size-[28px] top-[12px]" data-name="Button">
      <Icon17 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M3.33333 15.5556H16.6667" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d="M3.33333 4.44444H16.6667" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d="M10 10H16.6667" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p213f7380} id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute left-[12px] size-[28px] top-[40px]" data-name="Button">
      <Icon18 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M3.33333 15.5556H16.6667" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d="M3.33333 4.44444H16.6667" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d="M10 10H16.6667" id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p26d2a280} fill="var(--fill-0, #444444)" id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute left-[40px] size-[28px] top-[40px]" data-name="Button">
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[4px] size-[18px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M3 9H15" id="Vector" stroke="var(--stroke-0, #64748B)" />
          <path d="M3 14H13" id="Vector_2" stroke="var(--stroke-0, #64748B)" />
          <path d="M3 4H9" id="Vector_3" stroke="var(--stroke-0, #64748B)" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[24px] left-[83px] rounded-[6px] top-[42px] w-[28px]" data-name="Button">
      <Icon20 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p4162600} fill="var(--fill-0, #444444)" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p30ebb070} fill="var(--fill-0, #444444)" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <g id="Vector_3">
            <path d={svgPaths.p3573b180} fill="var(--fill-0, #444444)" />
            <path d={svgPaths.pb308480} stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          </g>
          <g id="Vector_4">
            <path d={svgPaths.pbca3000} fill="var(--fill-0, #444444)" />
            <path d={svgPaths.p23815580} stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute left-[126px] size-[28px] top-[40px]" data-name="Button">
      <Icon21 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p7e90c5c} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p3df33f00} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p25a92800} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute left-[154px] size-[28px] top-[40px]" data-name="Button">
      <Icon22 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p121d4180} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p2e606a30} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p25083a40} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute left-[197px] size-[28px] top-[40px]" data-name="Button">
      <Icon23 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5.55556 3.33333H14.4444" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p2be9c480} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p346c7780} id="Vector_3" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p35f729c0} id="Vector_4" stroke="var(--stroke-0, #64748B)" strokeWidth="1.11111" />
          <path d={svgPaths.p3c0d8b40} fill="var(--fill-0, #64748B)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute left-[240px] size-[28px] top-[40px]" data-name="Button">
      <Icon24 />
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#f8fafc] h-[81px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button7 />
        <Button8 />
        <Button9 />
        <Button10 />
        <Button11 />
        <Button12 />
        <Button13 />
        <Button14 />
        <Button15 />
        <Button16 />
        <Button17 />
        <Button18 />
        <Button19 />
        <Button20 />
        <Button21 />
        <Button22 />
        <Button23 />
        <Button24 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return <div className="h-[25.188px] relative shrink-0 w-full" data-name="Paragraph" />;
}

function Text3() {
  return (
    <div className="absolute h-[25.188px] left-[16px] top-[16px] w-[611px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[25.2px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">Write your content here... Use bullet points with • symbol.</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[200px] min-h-[200px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-[642px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Paragraph4 />
        <Text3 />
      </div>
    </div>
  );
}

function ReactQuill() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-px relative rounded-[12px] shrink-0 w-[644px]" data-name="React Quill">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container42 />
      <Container43 />
    </div>
  );
}

function RichTextEditorMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="RichTextEditor:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <ReactQuill />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#475569] text-[0px] whitespace-nowrap">
          <span className="leading-[19.2px] text-[12px]">Formatting:</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.2px] text-[#64748b] text-[12px]">{` **bold**, *italic*, \`code\`, ~~strikethrough~~, [link text](url)`}</span>
        </p>
      </div>
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container44 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[361px] relative shrink-0 w-[644px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Label12 />
        <RichTextEditorMargin />
        <ContainerMargin6 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-[644px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container28 />
        <Container33 />
        <ContainerMargin5 />
        <Container41 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start p-[17px] relative rounded-[12px] shrink-0 w-[678px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container26 />
      <Container27 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[678px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container24 />
        <ContainerMargin4 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3c401780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56b0600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17caa400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Create Note</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="bg-[#2563eb] content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-[678px]" data-name="Button">
      <Icon25 />
      <Text4 />
    </div>
  );
}

function ContainerMargin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Button25 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[728px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[25px] relative size-full">
        <Heading2 />
        <Container15 />
        <Container23 />
        <ContainerMargin7 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1236.5px] items-start left-[376px] top-0 w-[728px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[1236.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
        <Container13 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1152px] px-[24px] py-[32px] relative shrink-0 w-[1152px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M9 14.25L3.75 9L9 3.75" id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M14.25 9H3.75" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[8px] relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[28.8px] relative shrink-0 text-[#1e293b] text-[19.2px] whitespace-nowrap">Admin Panel</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Content Management System</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-[158.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button26 />
        <Container48 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1a6b1100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">View Notes</p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-[#2563eb] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">
        <Icon27 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12257fa0} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c1f680} id="Vector_2" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 8H6" id="Vector_3" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#dc2626] text-[14px] text-center whitespace-nowrap">Logout</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#fca5a5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[17px] py-[9px] relative size-full">
        <Icon28 />
        <Text6 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button27 />
        <Button28 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1152px] px-[24px] py-[16px] relative shrink-0 w-[1152px]" data-name="Container">
      <Container47 />
      <Container49 />
    </div>
  );
}

function ContainerMargin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container46 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] left-0 top-[269px] w-[1536px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative size-full">
        <ContainerMargin8 />
      </div>
    </div>
  );
}

function AdminPanel() {
  return (
    <div className="bg-[#f8fafc] min-h-[1111px] relative shrink-0 w-full" data-name="AdminPanel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <StickyPlaceholderAdminPanel />
        <ContainerMargin />
        <Container45 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[1111px] relative shrink-0 w-[1536px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <AdminPanel />
      </div>
    </div>
  );
}

export default function Notes() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="NOTES">
      <Body />
    </div>
  );
}