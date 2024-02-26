import { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";

const ProductComponent = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedSubType, setSelectedSubType] = useState(null);

    const [productOptions, setProductOptions] = useState([]);
    const [productTypeOptions, setProductTypeOptions] = useState([]);
    const [productSubTypeOptions, setProductSubTypeOptions] = useState([]);

    // Fetching products
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/categories');
                const options = response.data.map(product => ({
                    label: product,
                    value: product.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "_"),
                }));
                setProductOptions(options);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        // Reset type and subtype when changing product
        setSelectedType(null);
        setSelectedSubType(null);
        // Mocking product types
        const productTypes = {
            electronics: ["Phones", "Laptops", "Tablets", "Headphones", "Smartwatches"],
            jewelery: ["Bracelets", "Rings", "Earrings", "Necklaces", "Watches"],
            mens_clothing: ["Shirts", "Trousers", "Jackets", "Jeans", "Suits"],
            womens_clothing: ["Dresses", "Tops", "Skirts", "Jeans", "Jackets"]
        };
        if (selectedProduct) {
            setProductTypeOptions(productTypes[selectedProduct.value.toLowerCase()].map(type => ({ label: type, value: type.toLowerCase().replace(/ /g, '_') })));
        } else {
            setProductTypeOptions([]);
        }
    }, [selectedProduct]);

    useEffect(() => {
        // Reset subtype when changing type
        setSelectedSubType(null);
        // Mocking product subtypes
        const productSubTypes = {
            phones: ["Android", "iPhone", "Windows Phone"],
            laptops: ["Gaming Laptops", "Business Laptops", "Ultrabooks"],
            tablets: ["Android Tablets", "iPad", "Windows Tablets"],
            headphones: ["Over-ear", "On-ear", "In-ear"],
            smartwatches: ["Fitness Trackers", "Smartwatches with GPS", "Fashion Smartwatches"],
            bracelets: ["Gold", "Silver", "Diamond"],
            rings: ["Engagement Rings", "Wedding Bands", "Promise Rings"],
            earrings: ["Stud Earrings", "Hoop Earrings", "Dangle Earrings"],
            necklaces: ["Pendant Necklaces", "Chains", "Chokers"],
            watches: ["Analog Watches", "Digital Watches", "Chronograph Watches"],
            shirts: ["Casual Shirts", "Formal Shirts", "T-shirts"],
            trousers: ["Chinos", "Jeans", "Casual Trousers"],
            jackets: ["Leather Jackets", "Denim Jackets", "Bomber Jackets"],
            jeans: ["Slim Fit Jeans", "Straight Fit Jeans", "Skinny Jeans"],
            suits: ["Business Suits", "Wedding Suits", "Casual Suits"],
            dresses: ["Maxi Dresses", "Midi Dresses", "Summer Dresses"],
            tops: ["Blouses", "T-shirts", "Tank Tops"],
            skirts: ["Mini Skirts", "Midi Skirts", "Maxi Skirts"]
        };
        if (selectedType) {
            setProductSubTypeOptions(productSubTypes[selectedType.value].map(subtype => ({ label: subtype, value: subtype.toLowerCase().replace(/ /g, '_') })));
        } else {
            setProductSubTypeOptions([]);
        }
    }, [selectedType]);

    return (
        <div style={{ display: 'flex', paddingTop: '68px' }}>
            <Select
                options={productOptions}
                placeholder="Select Products"
                value={selectedProduct}
                onChange={setSelectedProduct}
            />
            <Select
                style={{ marginLeft: '5px' }}
                options={productTypeOptions}
                placeholder="Select Type"
                value={selectedType}
                onChange={setSelectedType}
                isDisabled={!selectedProduct}
            />
            <Select
                options={productSubTypeOptions}
                placeholder="Select SubType"
                style={{ marginLeft: '5px' }}

                value={selectedSubType}
                onChange={setSelectedSubType}
                isDisabled={!selectedType}
            />
        </div>
    );
};

export default ProductComponent; 