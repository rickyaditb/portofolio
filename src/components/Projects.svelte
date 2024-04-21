<script>
    import { fly, fade } from "svelte/transition";
    import { inview } from "svelte-inview";

    import Data from "../data.json";
    import Configuration from "../configuration.json";
    import Translation from "../translation.json";

    export let lang;
    export let dark;

    let isInView;
    let isInViewStack = false;
    let isEven = (e, i) => {
        let result = i % 2;
        return result === 0 ? true : false;
    };

    let darkBgColor;
    $: darkBgColor = dark ? "white" : "black";
    let darkTextColor;
    $: darkTextColor = dark ? "text-black" : "text-white";
    let darkIconColor;
    $: darkIconColor = dark ? "black" : "white";
    let darkBorderColor;
    $: darkBorderColor = dark ? "border-white" : "border-black";

    let length = Configuration.certifications.startItems;
    $: viewStatus = length === 1 ? Translation[lang]['view-more'] : Translation[lang]['view-less']
    let expandLength = () => {
        length === Configuration.certifications.startItems ? length = 10 : length = Configuration.certifications.startItems;
        console.log(length)
    }
</script>

<section id="project">
    <div
        use:inview={Configuration["animation"].options}
        on:enter={() => {
            isInView = true;
        }}
        class={isInView ? "opacity-100" : "opacity-0"}
    >
        {#key [lang, isInView]}
            <h1
                in:fly={Configuration["animation"]["in-fly"]}
                class="font-bold text-4xl"
            >
                {Translation[lang]["project"]}
            </h1>
        {/key}
    </div>
    {#key isInView}
        {#each Data.projects.slice(0, 1) as project, index}
            <div
                use:inview={Configuration["animation"].options}
                on:enter={() => {}}
                in:fly={Configuration["animation"]["in-fly"]}
            >
                <article class={`grid lg:grid-cols-2 mt-4 gap-10 items-center`}>
                    {#if isEven(Data.projects, index)}
                        <div
                            class="group border-2 {darkBorderColor} rounded h-64 hidden lg:block text-black text-center bg-cover bg-center bg-no-repeat"
                            style="background-image: url('{project.thumbnail}');"
                        >
                            <div
                                class="bg-black/70 group-hover:opacity-100 h-full opacity-0 transition duration-500 ease-out flex flex-col items-center justify-center gap-3 rounded"
                            >
                                <a
                                    href="{project.demoLink}"
                                    class="w-52 border-white border-2 px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href="{project.sourceLink}"
                                    class="w-52 border-white border-2 px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span>Source Code</span>
                                </a>
                            </div>
                        </div>
                    {/if}
                    <div>
                        <p class="text-2xl lg:text-3xl font-bold">
                            {project.name}
                        </p>
                        <div
                            class="my-4 bg-red-500 rounded h-64 block lg:hidden group"
                        >
                            <div
                                class="bg-black/50 group-hover:opacity-100 h-full opacity-0 transition duration-500 ease-out flex flex-col items-center justify-center gap-3 rounded"
                            >
                                <a
                                    href="{project.demoLink}"
                                    class="w-52 border-white border-2 px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href="{project.sourceLink}"
                                    class="w-52 border-white border-2 px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span>Source Code</span>
                                </a>
                            </div>
                        </div>
                        <p class="mt-2 text-justify">{project.description}</p>
                        <div class="flex gap-3 flex-wrap mt-4">
                            {#each project.stacks as stack}
                                <button
                                    style={`background-color: ${
                                        stack.iconColor === "white"
                                            ? darkBgColor
                                            : stack.iconColor
                                    };`}
                                    class={`${
                                        stack.textColor === "white"
                                            ? "text-white"
                                            : darkTextColor
                                    } font-bold rounded px-3 py-2 flex gap-2 items-center`}
                                >
                                    <img
                                        height="20"
                                        width="20"
                                        src={`https://cdn.simpleicons.org/${
                                            stack.iconUrl
                                        }/${
                                            stack.textColor === "black"
                                                ? darkIconColor
                                                : stack.textColor
                                        }`}
                                        alt=""
                                    />
                                    <span>{stack.name}</span>
                                </button>
                            {/each}
                        </div>
                    </div>
                    {#if isEven(Data.projects, index) === false}
                        <div
                            class="group border-2 {darkBorderColor} rounded h-64 hidden lg:block text-black text-center bg-cover bg-center bg-no-repeat"
                            style="background-image: url('{project.thumbnail}');"
                        >
                            <div
                                class="bg-black/50 group-hover:opacity-100 h-full opacity-0 transition duration-500 ease-out flex flex-col items-center justify-center gap-3 rounded"
                            >
                                <a
                                    href="{project.demoLink}"
                                    class="w-52 border-white border-2 px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href="{project.sourceLink}"
                                    class="w-52 border-white border-2 px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span>Source Code</span>
                                </a>
                            </div>
                        </div>
                    {/if}
                </article>
            </div>
        {/each}
    {/key}
    {#key length}
        {#each Data.projects.slice(1, length) as project, index}
            <div
                use:inview={Configuration["animation"].options}
                on:enter={() => {}}
                in:fly={Configuration["animation"]["in-fly"]}
                out:fade
            >
                <article class={`grid lg:grid-cols-2 mt-4 gap-10 items-center`}>
                    {#if isEven(Data.projects, index) === false}
                        <div
                            class="group border-2 {darkBorderColor} rounded h-64 hidden lg:block text-black text-center bg-cover bg-center bg-no-repeat"
                            style="background-image: url('{project.thumbnail}');"
                        >
                            <div
                                class="bg-black/50 group-hover:opacity-100 h-full opacity-0 transition duration-500 ease-out flex flex-col items-center justify-center gap-3 rounded"
                            >
                                <a
                                    href="{project.demoLink}"
                                    class="w-52 border-white border-2 px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href="{project.sourceLink}"
                                    class="w-52 border-white border-2 px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span>Source Code</span>
                                </a>
                            </div>
                        </div>
                    {/if}
                    <div>
                        <p class="text-2xl lg:text-3xl font-bold">
                            {project.name}
                        </p>
                        <div
                            class="my-4 bg-red-500 rounded h-64 block lg:hidden group"
                        >
                            <div
                                class="bg-black/50 group-hover:opacity-100 h-full opacity-0 transition duration-500 ease-out flex flex-col items-center justify-center gap-3 rounded"
                            >
                                <a
                                    href="{project.demoLink}"
                                    class="w-52 border-white border-2 px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href="{project.sourceLink}"
                                    class="w-52 border-white border-2 px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span>Source Code</span>
                                </a>
                            </div>
                        </div>
                        <p class="mt-2 text-justify">{project.description}</p>
                        <div class="flex gap-3 mt-3 flex-wrap">
                            {#each project.stacks as stack}
                                <button
                                    style={`background-color: ${
                                        stack.iconColor === "white"
                                            ? darkBgColor
                                            : stack.iconColor
                                    };`}
                                    class={`${
                                        stack.textColor === "white"
                                            ? "text-white"
                                            : darkTextColor
                                    } font-bold rounded px-3 py-2 flex gap-2 items-center`}
                                >
                                    <img
                                        height="20"
                                        width="20"
                                        src={`https://cdn.simpleicons.org/${
                                            stack.iconUrl
                                        }/${
                                            stack.textColor === "black"
                                                ? darkIconColor
                                                : stack.textColor
                                        }`}
                                        alt=""
                                    />
                                    <span>{stack.name}</span>
                                </button>
                            {/each}
                        </div>
                    </div>
                    {#if isEven(Data.projects, index)}
                        <div
                            class="group border-2 {darkBorderColor} rounded h-64 hidden lg:block text-black text-center bg-cover bg-center bg-no-repeat"
                            style="background-image: url('{project.thumbnail}');"
                        >
                            <div
                                class="bg-black/50 group-hover:opacity-100 h-full opacity-0 transition duration-500 ease-out flex flex-col items-center justify-center gap-3 rounded"
                            >
                                <a
                                    href="{project.demoLink}"
                                    class="w-52 border-white border-2 px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href="{project.sourceLink}"
                                    class="w-52 border-white border-2 px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span>Source Code</span>
                                </a>
                            </div>
                        </div>
                    {/if}
                </article>
            </div>
        {/each}
    {/key}
    {#key lang}
    <button in:fly={Configuration['animation']['in-fly']} class="mx-auto flex justify-center items-center gap-1 cursor-pointer mt-3" on:click={expandLength}>
        <span>{viewStatus}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={`w-6 h-6 ${length !== Configuration.certifications.startItems && 'rotate-180'}`}>
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
        </svg>                      
    </button>
    {/key}
</section>
