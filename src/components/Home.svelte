<script>
    import { fly } from "svelte/transition";
    import { inview } from "svelte-inview";

    import Data from "../data.json";
    import Configuration from "../configuration.json";
    import Translation from "../translation.json";

    export let lang;
    export let dark;
    
    let isInView;
</script>

<section
    use:inview={Configuration["animation"].options}
    on:enter={() => {
        isInView = true;
    }}
    class={`${
        isInView ? "opacity-100" : "opacity-0"
    } md:grid grid-cols-3 justify-items-end`}
    id="home"
>
    {#key isInView}
        <div
            in:fly={Configuration["animation"]["in-fly"]}
            class="flex md:hidden flex-col items-center justify-between mb-5"
        >
            <div class="w-48 h-48 rounded-full">
                <img
                    src="./assets/img/profile.png"
                    class="rounded-full border-2 border-gray-600"
                    alt="Profile Foto"
                />
            </div>
        </div>
        <div
            in:fly={Configuration["animation"]["in-fly"]}
            class="col-span-2 text-center md:text-justify"
        >
            <h1 class="font-bold text-4xl">{Data.name}</h1>
            <h2 class="text-2xl mt-5 md:mt-1">{Data.title}</h2>
            {#key lang}
                <p
                    in:fly={Configuration["animation"]["in-fly"]}
                    class="mt-4 mb-6 text-xl"
                >
                    {Data.description}<span class="hidden md:inline" />
                </p>
            {/key}
            {#key lang}
                <div
                    in:fly={Configuration["animation"]["in-fly"]}
                    class="flex gap-4 justify-center md:justify-start"
                >
                    <a
                        href={Data.resume}
                        class="inline border-4 border-secondary bg-secondary font-bold text-xl md:text-2xl px-3 py-2 rounded text-white"
                        >{Translation[lang]["home-button"][0]}</a
                    >
                    <a
                        href={Data.contact}
                        class="inline border-4 text-secondary border-secondary font-bold text-xl md:text-2xl px-3 py-2 rounded"
                        >{Translation[lang]["home-button"][1]}</a
                    >
                </div>
            {/key}
        </div>
        <div
            in:fly={Configuration["animation"]["in-fly"]}
            class="hidden md:flex flex-col justify-center gap-5 items-center"
        >
            <div class="w-48 h-48 rounded-full">
                <img
                    src="./assets/img/profile.png"
                    class="rounded-full border-2 border-gray-600"
                    alt="Profile Foto"
                />
            </div>
            <div class="flex gap-2">
                <a
                    href={Data.links.twitter}
                    class="bg-blue-500 w-10 h-10 rounded flex items-center justify-center p-2"
                >
                    <img
                        height="32"
                        width="32"
                        src="https://cdn.simpleicons.org/twitter/white"
                        alt="Twitter Icon"
                    />
                </a>
                <a
                    href={Data.links.github}
                    class={`${dark ? 'bg-gray-500' : 'bg-gray-600'} w-10 h-10 rounded flex items-center justify-center p-2 transition ease-out duration-1000`}
                >
                    <img
                        height="32"
                        width="32"
                        src="https://cdn.simpleicons.org/github/white"
                        alt="Github Icon"
                    />
                </a>
                <a
                    href={Data.links.linkedin}
                    class="bg-blue-700 text-white w-10 h-10 rounded flex items-center justify-center p-2 font-bold text-2xl"
                >
                    in
                </a>
                <a
                    href={Data.links.behance}
                    class={`${dark ? 'bg-white' : 'bg-black'} w-10 h-10 rounded flex items-center justify-center p-2 transition ease-out duration-1000`}
                >
                    <img
                        height="32"
                        width="32"
                        src={`https://cdn.simpleicons.org/behance/${dark ? 'black' : 'white'}`}
                        alt="Github Icon"
                    />
                </a>
                <a
                    href={Data.links.email}
                    class="bg-red-600 w-10 h-10 rounded flex items-center justify-center p-2 text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-8 h-8"
                    >
                        <path
                            d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                        />
                        <path
                            d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                        />
                    </svg>
                </a>
            </div>
        </div>
        <div
            in:fly={Configuration["animation"]["in-fly"]}
            class="flex md:hidden justify-center gap-2 mt-5"
        >
            <a
                href={Data.links.twitter}
                class="bg-blue-500 w-10 h-10 rounded flex items-center justify-center p-2"
            >
                <img
                    height="32"
                    width="32"
                    src="https://cdn.simpleicons.org/twitter/white"
                    alt="Twitter Icon"
                />
            </a>
            <a
                href={Data.links.github}
                class="bg-gray-500 w-10 h-10 rounded flex items-center justify-center p-2"
            >
                <img
                    height="32"
                    width="32"
                    src="https://cdn.simpleicons.org/github/white"
                    alt="Github Icon"
                />
            </a>
            <a
                href={Data.links.linkedin}
                class="bg-blue-700 w-10 h-10 rounded flex items-center justify-center p-2 font-bold text-2xl"
            >
                in
            </a>
            <a
                href={Data.links.email}
                class="bg-red-600 w-10 h-10 rounded flex items-center justify-center p-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-8 h-8"
                >
                    <path
                        d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                    />
                    <path
                        d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                    />
                </svg>
            </a>
        </div>
    {/key}
</section>
