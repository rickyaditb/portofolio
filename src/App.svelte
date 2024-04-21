<script>
    import Head from "./components/Head.svelte";
    import Header from "./components/Header.svelte";
    import Home from "./components/Home.svelte";
    import Skills from "./components/Skills.svelte";
    import Education from "./components/Education.svelte";
    import Experience from "./components/Experience.svelte";
    import Certifications from "./components/Certifications.svelte";
    import Projects from "./components/Projects.svelte";
    import Footer from "./components/Footer.svelte";

    let lang = "english";
    let dark = true;

    const langSwitcher = (event) => {
        lang = event.detail.toLowerCase();
    };
    const themeSwitcher = () => {
        dark = !dark;
        let bgColor = dark ? "#050010" : "white"
        let textColor = dark ? "white" : "#1f2937"
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;
    };

    const anchorHandler = (event) => {
        const anchor = document.getElementById(event.detail);
        window.scrollTo({
			top: anchor.offsetTop-30,
			behavior: 'smooth'
		})
    }
</script>


    <Head />
    <Header {lang} {dark} on:language={langSwitcher} on:anchor={anchorHandler} on:theme={themeSwitcher}/>
    <main class="container mx-auto px-5 xl:px-44 flex flex-col gap-16 my-8">
        <Home {lang} {dark} />
        <Skills {lang} />
        <Education {lang} />
        <Experience {lang} {dark} />
        <!-- <Certifications {lang} {dark} /> -->
        <Projects {lang} {dark} />
    </main>
    <Footer />
