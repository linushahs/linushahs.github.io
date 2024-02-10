function Profile() {
  const linkItems = [
    { label: "About", href: "#about" },
    { label: "Experiences", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ];

  const socialIcons = ["github", "linkedin", "codepen", "instagram"];

  return (
    <div className="fixed h-full flex pl-10 items-center">
      <div className="flex flex-col justify-between gap-[110px]">
        {/* top bar */}
        <div className="flex flex-col gap-2 justify-between">
          <h1 className="text-white text-[50px] font-bold">Linus Hahs</h1>
          <p className="normal text-[22px]">Frontend Developer at Microsoft</p>
          <span className=" text-white opacity-[70%]">
            I build pixel-perfect, engaging, and <br /> accessible digital
            experiences.
          </span>
        </div>
        {/* link bar */}
        <div className="flex flex-col gap-3">
          {linkItems.map((item, index) => (
            <p
              key={index}
              className="normal uppercase text-sm flex items-center gap-2"
            >
              <hr className="w-10" />
              <a href={item.href}>{item.label}</a>
            </p>
          ))}
        </div>
        {/* icon bar  */}
        <div className="flex gap-4">
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
