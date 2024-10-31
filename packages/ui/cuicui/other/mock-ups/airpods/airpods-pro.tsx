export const AirpodsPro = () => {
	return (
		<div
			aria-hidden="true"
			className="pointer-events-none relative h-[220px] w-[300px] select-none rounded-[70px] bg-neutral-200 shadow-2xl"
			style={{
				boxShadow: `
          inset 0px 35px 25px #ffffffe0,
          inset 10px 0px 25px #0000004b,
          inset 40px 0px 20px #ffffff,
          inset -10px 0px 25px #0000004b,
          inset -40px -5px 20px #fff,
          inset 0px 10px 10px #00000090,
          inset 0px -15px 25px #00000036,
          10px 25px 40px -10px #00000040`,
			}}
		>
			{/* Cavity */}
			<div className="-translate-x-1/2 absolute top-1/3 left-1/2 h-[20px] w-[150px] translate-y-1/3 transform rounded-full bg-gradient-to-b from-neutral-300 to-white" />

			{/* Line */}
			<div className="relative mt-[30%] h-[2px] w-full bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200">
				<div className="absolute right-0 h-[2px] w-[5%] bg-white/50" />
				<div className="absolute left-0 h-[2px] w-[5%] bg-white/50" />
			</div>

			{/* LED */}
			<div className="-translate-x-1/2 absolute top-1/2 left-1/2 size-1.5 translate-y-[30%] transform rounded-full bg-green-300 shadow-[0_0_6px_#3eff4b]" />

			{/* Text */}
			<div className="mt-[70px] text-center font-semibold text-neutral-500/40">
				CuiCui
			</div>
		</div>
	);
};
