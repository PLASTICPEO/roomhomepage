const ContactInfo = () => {
  return (
    <div>
      <div className="text-end font-roboto xl:absolute xl:right-[2%] xl:bottom-[10%] xl:bottom-[5%] m-5 mt-2">
        <p className="text-5xl text-[#A76D60] font-bold flex flex-col">
          Your cozy <span>Home!</span>
        </p>
        <div>
          <p className="w-full mt-5 text-[#E0D0C1]">
            Contact us: +1 (533) 6454 45454 12/53 Towers Ave., 19726,
            California, USA
          </p>
          <p className="font-bold text-[#F7F9F9]">info@booreykoo.com</p>
          {/* <div className="flex justify-end items-center w-full mt-5">
            <a href="https://www.facebook.com/">
              <img src={facebookicon} className="mr-6 " />
            </a>
            <a href="https://www.instagram.com/">
              <img src={instagramicon} />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
