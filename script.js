// =====================================================
// Nancy Portfolio JavaScript
// =====================================================


document.addEventListener(
    "DOMContentLoaded",
    function () {


        // ================================================
        // SMOOTH SCROLL
        // ================================================


        const links =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        links.forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");


                    if (
                        targetId === "#" ||
                        !targetId
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });



        // ================================================
        // COPY EMAIL
        // ================================================


        const copyButton =
            document.getElementById(
                "copyEmailBtn"
            );


        const message =
            document.getElementById(
                "copyMessage"
            );


        const email =
            "nancytomar296@gmail.com";


        if (copyButton) {

            copyButton.addEventListener(
                "click",
                function () {

                    if (
                        navigator.clipboard &&
                        window.isSecureContext
                    ) {

                        navigator.clipboard
                            .writeText(email)
                            .then(function () {

                                showSuccess();

                            })
                            .catch(function () {

                                fallbackCopy();

                            });

                    } else {

                        fallbackCopy();

                    }

                }
            );

        }



        // ================================================
        // SUCCESS MESSAGE
        // ================================================


        function showSuccess() {

            message.textContent =
                "✓ Email copied successfully!";


            copyButton.textContent =
                "✓ Copied";


            setTimeout(
                function () {

                    message.textContent =
                        "";

                    copyButton.textContent =
                        "✉ Copy Email";

                },
                2500
            );

        }



        // ================================================
        // FALLBACK COPY
        // ================================================


        function fallbackCopy() {

            const textarea =
                document.createElement(
                    "textarea"
                );


            textarea.value = email;


            textarea.style.position =
                "fixed";


            textarea.style.left =
                "-9999px";


            document.body.appendChild(
                textarea
            );


            textarea.focus();

            textarea.select();


            try {

                document.execCommand(
                    "copy"
                );

                showSuccess();

            } catch (error) {

                message.textContent =
                    "Email: " + email;

            }


            document.body.removeChild(
                textarea
            );

        }

    }
);