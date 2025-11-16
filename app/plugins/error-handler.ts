export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook("vue:error", (err) => {
		console.log("asdrtyu");
		console.log(err);
	});
});
