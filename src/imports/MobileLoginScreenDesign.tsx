import svgPaths from "./svg-vh2mvxvk27";

function Heading() {
  return (
    <div className="absolute h-[48px] left-0 top-[96px] w-[340px]" data-name="Heading 1">
      <p className="absolute bg-clip-text font-['Arimo:Regular',sans-serif] font-normal leading-[48px] left-[170.26px] text-[48px] text-[rgba(0,0,0,0)] text-center text-nowrap top-[0.33px] translate-x-[-50%] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(194, 122, 255) 0%, rgb(124, 134, 255) 50%, rgb(173, 70, 255) 100%)" }}>
        Flashpoint
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[28px] left-0 top-[152px] w-[340px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[170.11px] text-[#dab2ff] text-[18px] text-center text-nowrap top-px translate-x-[-50%] whitespace-pre">FAST NUCES Payment App</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[180px] relative shrink-0 w-[340px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[180px] relative w-[340px]">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[32px] left-[137.52px] text-[24px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">Welcome Back</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-0 whitespace-pre">Email or Registration Number</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[48px] items-center px-[16px] py-0 relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6a7282] text-[16px] text-nowrap whitespace-pre">Enter your email or registration</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[76px] items-start left-0 top-0 w-[274.667px]" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-0 whitespace-pre">Password</p>
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] h-[48px] left-0 rounded-[14px] top-0 w-[274.667px]" data-name="Password Input">
      <div className="box-border content-stretch flex h-[48px] items-center overflow-clip pl-[16px] pr-[48px] py-0 relative rounded-[inherit] w-[274.667px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6a7282] text-[16px] text-nowrap whitespace-pre">Enter your password</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 14">
            <path d={svgPaths.pcb0000} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p2314a170} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[238.67px] size-[20px] top-[14px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <PasswordInput />
      <Button />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[76px] items-start left-0 top-[100px] w-[274.667px]" data-name="Container">
      <Label1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[92.583px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[92.583px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-0 whitespace-pre">Remember me</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[116.583px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[116.583px]">
        <Container4 />
        <Text />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[113.615px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[113.615px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[57px] text-[#dab2ff] text-[14px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Forgot Password?</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-0 top-[200px] w-[274.667px]" data-name="Container">
      <Label2 />
      <Button1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-gradient-to-b from-[#9810fa] h-[56px] left-0 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(152,16,250,0.3),0px_4px_6px_-4px_rgba(152,16,250,0.3)] to-[#432dd7] top-[244px] w-[274.667px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[137.8px] text-[18px] text-center text-nowrap text-white top-[15px] translate-x-[-50%] whitespace-pre">Login</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[24px] left-[183.56px] top-0 w-[58.094px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[29.5px] text-[#dab2ff] text-[16px] text-center text-nowrap top-[-0.33px] translate-x-[-50%] whitespace-pre">Sign Up</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-0 top-[332px] w-[274.667px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[108.5px] text-[14px] text-center text-white top-[2.67px] translate-x-[-50%] w-[151px]">{`Don't have an account?`}</p>
      <Button3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[48px] left-0 rounded-[14px] top-[456px] w-[274.667px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[137.69px] text-[14px] text-center text-nowrap text-white top-[14px] translate-x-[-50%] whitespace-pre">Login as Admin (Demo)</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[0.667px] left-0 top-[25.67px] w-[274.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[20px] left-[60.64px] top-[16px] w-[153.396px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 whitespace-pre">For demo purposes</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[52px] left-0 top-[380px] w-[274.667px]" data-name="Container">
      <Container6 />
      <Text1 />
    </div>
  );
}

function Form() {
  return (
    <div className="h-[504px] relative shrink-0 w-full" data-name="Form">
      <Container1 />
      <Container3 />
      <Container5 />
      <Button2 />
      <Paragraph1 />
      <Button4 />
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[625.333px] relative rounded-[24px] shrink-0 w-[340px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[625.333px] items-start pb-[0.667px] pt-[32.667px] px-[32.667px] relative w-[340px]">
        <Heading1 />
        <Form />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[340px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[340px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[170.42px] text-[14px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">© 2026 Flashpoint • FAST NUCES</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[985.333px] relative shrink-0 w-[393px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[48px] h-[985.333px] items-center justify-center relative w-[393px]">
        <Container />
        <Container8 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute content-stretch flex h-[985px] items-center justify-center left-0 top-0 w-[383px]" data-name="App">
      <Container9 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[18px] left-0 top-[-20000px] w-[21.406px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-neutral-950 text-nowrap top-[-1.33px] whitespace-pre">IEEE</p>
    </div>
  );
}

export default function MobileLoginScreenDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile Login Screen Design">
      <App />
      <Text2 />
    </div>
  );
}