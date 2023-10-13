const getState = ({ getStore, getActions, setStore }) => {
	return {
		// guardamos informacion en el store. si esta se cambia, se renderizan los componentes que la usan
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
				{
					title: "THIRD",
					background: "white",
					initial: "white"
				}
			],
			user: {
				email: '',
				username: ''
			},
			colours: [
				"white",
				"red",
				"orange",
				"yellow"
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				try {
					const response = await fetch("https://swapi.dev/api/people/");
					if (!response.ok) {
					  throw new Error("Network response was not ok");
					}
					const data = await response.json();
					console.log(data)
					setStore({ starWarsCharacters: data });
				  } catch (error) {
					console.error("There was a problem fetching the data:", error);
				  }
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addToDemo: (title, background, initial) => {
				const store = getStore();
				const demo = store.demo.concat({title: title, background: background, initial: initial});
				setStore({ demo: demo });
			},
			loginUser: (email, username) => {
				const store = getStore();
				const user = {email: email, username: username};
				setStore({ user: user });
			},
		}
	};
};

export default getState;
