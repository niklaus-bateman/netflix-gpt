import { useState } from "react";

const Form = () => {
	const [form, setForm] = useState(false)
	const formHandler = () => {
		setForm(()=>!form)
	}	
	return (
		<div className="absolute top-1/2 transform -translate-y-1/2  text-white w-full h-[400px] p-1 text-center flex justify-center">
			<form action="" className="flex flex-col p-4 space-y-8 w-2/4">
				<p className="font-bold text-xl">{form ? `Sign in` : `Sign up`}</p>
				{!form && (
					<input
						type="text"
						name=""
						id=""
						placeholder="Full name"
						className="p-1 rounded-lg bg-slate-300 w-3/4 self-center"
					/>
				)}
				<input
					type="email"
					name=""
					id=""
					placeholder="Email"
					className="p-1 rounded-lg bg-slate-300 w-3/4 self-center"
				/>
				<input
					type="password"
					name=""
					id=""
					placeholder="Password"
					className="p-1 rounded-lg bg-slate-300 w-3/4 self-center"
				/>
				<button
					type="submit"
					className="bg-red-600 p-1 rounded-lg w-3/4 self-center"
				>
					{form ? `Sign in` : `Sign up`}
				</button>
				{!form ? (
					<p className="font-bold text-xl">
						Already a user ?{" "}
						<span className="hover:cursor-pointer" onClick={formHandler}>
							Sign in
						</span>
					</p>
				) : (
					<p className="font-bold text-xl">
						New user ?{" "}
						<span className="hover:cursor-pointer" onClick={formHandler}>
							Sign up
						</span>
					</p>
				)}
			</form>
		</div>
	);
}

export default Form