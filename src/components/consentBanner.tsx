import { useEffect, useState } from "react";

export const ConsentBanner = ({ onAccept }: { onAccept: () => void }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) setVisible(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "true");
        setVisible(false);
        onAccept();
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-outline p-4 flex flex-col md:flex-row items-center justify-between shadow-lg z-[9999]">
            <p className="text-sm text-outline mb-2 md:mb-0">
                Ce site utilise des cookies pour assurer son bon fonctionnement et
                améliorer votre expérience. En continuant, vous acceptez l'utilisation
                de reCAPTCHA de Google (voir la{" "}
                <a href="https://policies.google.com/privacy" className="underline">
                    politique de confidentialité
                </a>{" "}
                et les{" "}
                <a href="https://policies.google.com/terms" className="underline">
                    conditions d’utilisation
                </a>
                ).
            </p>
            <button
                onClick={handleAccept}
                className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/80 transition"
            >
                Accepter
            </button>
        </div>
    );
};
