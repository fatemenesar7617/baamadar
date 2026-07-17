export default function CloseButton({
  onClose,
}) {

  return (

    <button
      onClick={onClose}
      className="
        absolute
        right-4
        top-4
        z-10
        flex
        h-10
        w-10
        items-center
        justify-center
      "
    >

      <img
        src="/icons/close.svg"
        alt="close"
        className="h-7 w-7"
      />

    </button>

  );
}