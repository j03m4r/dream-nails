"use client";

interface Services {
	title: string;
	price: number;
};

const services: Services[] = [
	{
		title: "Ombre nails color full set",
		price: 65
	},
	{
		title: "Ombre nails color refill",
		price: 55
	},
	{
		title: "Pink & white full set",
		price: 60
	},
	{
		title: "Pink & white refill",
		price: 50
	},
	{
		title: "Acrylic full set",
		price: 40
	},
	{
		title: "Acrylic refill",
		price: 30
	},
	{
		title: "Acrylic color add-on",
		price: 10
	},
	{
		title: "Gel full set",
		price: 56
	},
	{
		title: "Gel refill",
		price: 46
	},
	{
		title: "Gel or acrylic removal ",
		price: 10
	},
	{
		title: "Natural manicure",
		price: 26
	},
	{
		title: "Gel manicure",
		price: 39
	},
	{
		title: "Gel polish change",
		price: 30
	},
	{
		title: "Regular polish change",
		price: 16
	},
	{
		title: "French manicure add on",
		price: 6
	},
	{
		title: "Long nails add-on",
		price: 5
	},
	{
		title: "Nail shape change",
		price: 5
	},
	{
		title: "Nail shape change",
		price: 5
	},
	{
		title: "Nail art",
		price: 5
	},
	{
		title: "Nail repair",
		price: 5
	},
	{
		title: "Toenail cut",
		price: 13
	},
	{
		title: "Fingernail cut",
		price: 8
	},
	{
		title: "Smoothing pedicure",
		price: 38
	},
	{
		title: "Ice dancer pedicure",
		price: 48
	},
	{
		title: "Firewalker pedicure",
		price: 58
	},
	{
		title: "Gel polish",
		price: 18
	}
];

const Services = () => {
    return (
        <div className="p-4 md:p-14">
            {/* <h2 className="px-6 md:px-12 py-4 text-red text-4xl md:text-7xl font-bold">Services</h2> */}
            <div className="w-full flex flex-col items-center justify-center">
                {
                    services.map((service, idx) => (
                        <div key={`service_${idx}`} className="w-full border-t border-black text-black flex justify-between items-center px-6 md:px-12 py-4">
                            <h2 className="text-xl md:text-4xl text-center font-bold">{service.title}</h2>
                            <p className="text-lg md:text-2xl text-red font-semibold">${service.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Services;