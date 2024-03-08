function Profile() {
  const linkItems = [
    { label: "About", href: "#about" },
    { label: "Experiences", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ];

  const socialIcons = ["github", "linkedin", "codepen", "instagram"];

  return (
    <div className="lg:fixed h-full flex ">
      <div className="flex flex-col lg:gap-[110px]">
        {/* top bar */}
        <div className="flex flex-col gap-2 justify-between">
          <h1 className="text-white text-4xl sm:text-[50px] font-bold leading-[50px]">
            Linus Hahs
          </h1>
          <p className="normal text-xl sm:text-[22px] mt-2">
            Frontend Developer at Microsoft
          </p>
          <span className="text-base text-white opacity-[70%]">
            I build pixel-perfect, engaging, and <br /> accessible digital
            experiences.
          </span>
        </div>
        {/* link bar */}
        <div className="hidden lg:flex flex-col gap-3">
          {linkItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <hr className="w-10" />
              <p key={index} className="normal uppercase text-sm ">
                <a href={item.href}>{item.label}</a>
              </p>
            </div>
          ))}
        </div>
        {/* icon bar  */}
        <div className="flex gap-4 mt-10 mb-14 lg:m-0">
          {socialIcons.map((icon, index) => (
            <img
              key={index}
              src={`/${icon}.png`}
              alt={icon}
              className="w-[28px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
