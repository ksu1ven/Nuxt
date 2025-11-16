export const useUser = () => {
	const user = useState<{ name: string } | null>("user", () => ({
		name: "Ksu",
	}));

	const setUser = (name: string) => {
		user.value = { name };
	};

	const logout = () => {
		user.value = null;
	};

	return { user, setUser, logout };
};
