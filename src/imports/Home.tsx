import svgPaths from "./svg-f5n32d56zv";

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1fa66600} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p12b73380} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1273c9c0} id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-purple-100 relative rounded-[2.23696e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.396px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[39.396px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[20px] text-[#364153] text-[14px] text-center text-nowrap top-[-1.33px] translate-x-[-50%] whitespace-pre">Cafe Payments</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[80px] items-center relative shrink-0 w-full" data-name="Container">
      <Container />
      <Paragraph />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[112px] items-start left-[12px] pb-0 pt-[16px] px-[16px] rounded-[16px] shadow-[0px_4px_6px_-1px_#99a1af,0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[643px] w-[175px]" data-name="Button">
      <Container1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1b851600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 9V13" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 17H12.01" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f0b100] relative rounded-[2.23696e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Outstanding Fees</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#f54900] text-[24px]">PKR 120,000</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Due: 10 Jan 2026</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[80px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[80px] items-start relative w-full">
        <Paragraph1 />
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[12px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-r from-[#9810fa] h-[48px] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(152,16,250,0.3),0px_4px_6px_-4px_rgba(152,16,250,0.3)] shrink-0 to-[#432dd7] w-full" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[163.36px] text-[16px] text-center text-nowrap text-white top-[10.33px] translate-x-[-50%] whitespace-pre">Pay Now</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[12px] h-[173px] items-start left-[15px] pb-[0.667px] pl-[20px] pr-[16.667px] pt-[16.667px] rounded-[24px] shadow-[0px_4px_6px_-1px_#99a1af,0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[145px] w-[343px]" data-name="Container">
      <Container4 />
      <Button1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[28px] left-[7px] top-[360px] w-[362px]" data-name="Heading 2">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#6e11b0] text-[18px] text-nowrap top-[-1px] whitespace-pre">Quick Actions</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M9.33333 2.33333V7" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M18.6667 2.33333V7" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p57f3600} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M3.5 11.6667H24.5" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-blue-100 relative rounded-[2.23696e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[82.604px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[82.604px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[41px] text-[#364153] text-[14px] text-center text-nowrap top-[-1.33px] translate-x-[-50%] whitespace-pre">Semester Fee</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Paragraph4 />
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[16px] shadow-[0px_4px_6px_-1px_#99a1af,0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[16px] px-[16px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p283e7780} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M15.1667 5.83333V8.16667" id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M15.1667 19.8333V22.1667" id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M15.1667 12.8333V15.1667" id="Vector_4" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 bg-purple-100 grow min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0 w-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center relative w-[48px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[123.938px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[123.938px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[62.5px] text-[#364153] text-[14px] text-center text-nowrap top-[-1.33px] translate-x-[-50%] whitespace-pre">{`My Events & Tickets`}</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[80px] items-center left-[16px] top-[16px] w-[143px]" data-name="Container">
      <Container8 />
      <Paragraph5 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#9810fa] content-stretch flex items-center justify-center left-[143px] rounded-[2.23696e+07px] size-[20px] top-[12px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[11px] text-center text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="[grid-area:1_/_2] bg-white relative rounded-[16px] shadow-[0px_4px_6px_-1px_#99a1af,0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <Container9 />
      <Text />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1fa66600} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p12b73380} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1273c9c0} id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-purple-100 relative rounded-[2.23696e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.396px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[39.396px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[20px] text-[#364153] text-[14px] text-center text-nowrap top-[-1.33px] translate-x-[-50%] whitespace-pre">Profile</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[80px] items-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Paragraph6 />
    </div>
  );
}

function Button4() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[16px] shadow-[0px_4px_6px_-1px_#99a1af,0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[16px] px-[16px] relative size-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1fa66600} id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1e09a500} id="Vector_2" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 19.8334H14.0117" id="Vector_3" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-indigo-100 relative rounded-[2.23696e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[49.646px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[49.646px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[25px] text-[#364153] text-[14px] text-center text-nowrap top-[-1.33px] translate-x-[-50%] whitespace-pre">Support</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[80px] items-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Paragraph7 />
    </div>
  );
}

function Button5() {
  return (
    <div className="[grid-area:2_/_2] bg-white relative rounded-[16px] shadow-[0px_4px_6px_-1px_#99a1af,0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[16px] px-[16px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white gap-[12px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[236px] left-[7px] top-[388px] w-[362px]" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Icon11() {
  return <div className="absolute inset-[26.37%_27.73%_47.25%_65.87%]" data-name="Icon / 23" />;
}

function IcosnSearch() {
  return <div className="absolute inset-[26.37%_46.93%_47.25%_46.67%]" data-name="icosn/search (1) 1" />;
}

function Group1() {
  return (
    <div className="absolute bottom-[-1.1%] contents left-0 right-0 top-0">
      <div className="absolute bg-white bottom-[-1.1%] left-0 right-0 shadow-[0px_-5px_30px_0px_rgba(54,41,183,0.07)] top-0" data-name="Rectangle" />
      <Icon11 />
      <IcosnSearch />
    </div>
  );
}

function TabBarHome() {
  return (
    <div className="absolute h-[91px] left-0 top-[773px] w-[375px]" data-name="Tab bar / Home">
      <Group1 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[24px]">
        <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
              <path d={svgPaths.p11b86180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.pb08b100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[33.771px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[33.771px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap whitespace-pre">Profile</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-center left-[298px] top-[790px] w-[33.771px]" data-name="Button">
      <Icon6 />
      <Text1 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[24px]">
        <div className="absolute inset-[87.5%_42.78%_8.33%_42.78%]" data-name="Vector">
          <div className="absolute inset-[-100.03%_-28.87%_-100.01%_-28.87%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 3">
              <path d={svgPaths.p5ce7600} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_12.5%_29.17%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-6.67%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
              <path d={svgPaths.p3337a00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[34.052px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[34.052px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap whitespace-pre">Events</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-center left-[223px] top-[789px] w-[34.052px]" data-name="Button">
      <Icon7 />
      <Text2 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[24px]">
        <div className="absolute inset-[20.83%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-7.14%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
              <path d={svgPaths.pc26e480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_8.33%_58.33%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-1px_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 2">
              <path d="M1 1H21" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[50.792px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[50.792px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#99a1af] text-[12px] text-center text-nowrap whitespace-pre">Payments</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-center left-[121px] top-[788px] w-[50.792px]" data-name="Button">
      <Icon8 />
      <Text3 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[24px]">
        <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-11.11%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
              <path d={svgPaths.p3ff7f900} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.26%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
              <path d={svgPaths.pce35280} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[32.167px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[32.167px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#c27aff] text-[12px] text-center text-nowrap whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-center left-[39px] top-[787px] w-[42px]" data-name="Button">
      <Icon9 />
      <Text4 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-0 left-[8.33%] right-[8.33%] top-[0.03%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
        <g id="Group">
          <path d={svgPaths.p26eb52f0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2f814080} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute inset-[8.22%_6.93%_89%_86.67%] overflow-clip" data-name="Icon / 34">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[7.75%_6.4%_90.16%_89.33%]">
      <div className="absolute inset-[7.75%_6.4%_90.39%_89.33%]" data-name="Oval">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path clipRule="evenodd" d={svgPaths.p30769300} fill="var(--fill-0, #FF4267)" fillRule="evenodd" id="Oval" />
        </svg>
      </div>
      <p className="absolute font-['Poppins:Medium',sans-serif] inset-[7.87%_7.73%_90.16%_90.67%] leading-[17px] not-italic text-[10px] text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[7.75%_6.4%_89%_86.67%]">
      <Icon12 />
      <Group2 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p67f12c8} id="Vector" stroke="var(--stroke-0, #6E11B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c19cb00} id="Vector_2" stroke="var(--stroke-0, #6E11B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[#dab2ff] content-stretch flex items-center justify-center left-[32px] rounded-[2.23696e+07px] size-[40px] top-[63px]" data-name="Button">
      <Icon10 />
    </div>
  );
}

function SystemTabBarDisplayDown() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[96.06%]" data-name="System / TabBar / Display Down">
      <div className="absolute bg-[#cacaca] bottom-[9px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]" />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute contents left-[calc(50%+160.66px)] top-[calc(50%+3px)] translate-x-[-50%] translate-y-[-50%]" data-name="Battery">
      <div className="absolute h-[11.333px] left-[calc(50%+159.5px)] opacity-[0.35] rounded-[2.667px] top-[calc(50%+3px)] translate-x-[-50%] translate-y-[-50%] w-[22px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[2.667px]" />
      </div>
      <div className="absolute h-[4px] left-[calc(50%+172.16px)] top-[calc(50%+3px)] translate-x-[-50%] translate-y-[-50%] w-[1.328px]" data-name="Combined Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
          <path d={svgPaths.p32d253c0} fill="var(--fill-0, white)" id="Combined Shape" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bg-white h-[7.333px] left-[calc(50%+159.5px)] rounded-[1.333px] top-[calc(50%+3px)] translate-x-[-50%] translate-y-[-50%] w-[18px]" data-name="Rectangle" />
    </div>
  );
}

function SystemStatusBarsWhite() {
  return (
    <div className="absolute bottom-[95.37%] left-0 right-0 top-0" data-name="System / StatusBars / White">
      <Battery />
      <div className="absolute inset-[43.33%_11.74%_29.26%_84.18%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
          <path d={svgPaths.p3d78f640} fill="var(--fill-0, white)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[44.17%_17.16%_29.17%_78.31%]" data-name="Mobile Signal">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
          <path d={svgPaths.p26d17600} fill="var(--fill-0, white)" id="Mobile Signal" />
        </svg>
      </div>
      <div className="absolute inset-[42.92%_82.89%_29.34%_8.57%]" data-name="9:09">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 12">
          <path clipRule="evenodd" d={svgPaths.p78d6700} fill="var(--fill-0, white)" fillRule="evenodd" id="9:09" />
        </svg>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#3629b7] relative size-full" data-name="Home">
      <div className="absolute bg-white h-[750px] left-0 rounded-tl-[30px] rounded-tr-[30px] top-[130px] w-[375px]" />
      <Button />
      <Container5 />
      <Heading />
      <Container14 />
      <TabBarHome />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Group3 />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[24px] left-[92px] not-italic text-[16px] text-nowrap text-white top-[69px] whitespace-pre">Welcome, Abdul Mutaal</p>
      <Button10 />
      <SystemTabBarDisplayDown />
      <SystemStatusBarsWhite />
    </div>
  );
}