import { ButtonColorful } from "@/components/ui/button-colorful";

function ButtonDemo() {
    return (
        <div className="flex flex-col gap-4 p-8">
            <h2 className="text-2xl font-bold mb-4">ButtonColorful Demo</h2>
            
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Default Variant (Purple/Pink)</h3>
                    <ButtonColorful label="Explore Components" />
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold mb-2">Orange Variant (Brand Colors)</h3>
                    <ButtonColorful label="Get Started" variant="orange" />
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold mb-2">Custom Styling</h3>
                    <ButtonColorful 
                        label="Contact Me" 
                        variant="orange" 
                        className="px-8 py-3 text-lg rounded-full h-12"
                    />
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold mb-2">As Link (with asChild)</h3>
                    <ButtonColorful 
                        label="Portfolio" 
                        variant="orange" 
                        className="px-6 py-2"
                        asChild
                    >
                        <a href="/projects">Portfolio Link</a>
                    </ButtonColorful>
                </div>
            </div>
        </div>
    );
}

export { ButtonDemo };