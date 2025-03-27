import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
    return(
        <div className="p-4 space-y-4 flex flex-col max-w-[150px]">
            <Button variant="default">Primary</Button>
            <Button variant="outline">Primary Outline</Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
        </div>
    )
};

export default ButtonsPage;