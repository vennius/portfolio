interface props {
  placeholder: string;
}

export default function Input(props: props) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className="w-[400px] h-14 outline-none py-3 px-5 outline outline-black outline-[1.4px] rounded-[1px]"
    />
  );
}
