import Button from "./Button";
import Input from "./Input";

export default function ContactSection() {
  return (
    <section id="contact" className="flex py-14 px-20">
      <div className="w-1/2 flex flex-col gap-5 items-start">
        <Input placeholder="Your name" />
        <Input placeholder="Email" />
        <Input placeholder="Your website (if exists)" />
        <Button>Get in touch</Button>
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <div className="text-4xl font-extrabold mb-3">
          Let&apos;s <span className="underline">talk</span> for
        </div>
        <div className="text-4xl font-extrabold mb-5">Something special</div>
        <p className="text-zinc-500 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          natus aut sapiente, doloribus beatae similique.
        </p>
        <div className="font-semibold text-2xl">
          <div>stevenniuschandra@gmail.com</div>
          <div>1234567890</div>
        </div>
      </div>
    </section>
  );
}
