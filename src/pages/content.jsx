import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SalesButons from './sales-buttons.jsx'
const Content = (props) => {
	const location = useLocation()


	const description = {
		'origami-concrete-flower-vase': [
			{
				title: `Inspiration:`,
				text: `Drawing inspiration from the rich tapestry of Chinese culture, our Origami product series serves as an homage to the timeless artistry of the Middle Kingdom. Embracing the intricate aesthetics of traditional Chinese paper folding, these designs seamlessly fit both expansive spaces and compact nooks. The allure of Origami is boundless, enabling the creation of multifaceted and ingeniously crafted everyday items.`,
			},
			{
				title: `Craftmanship:`,
				text: `The journey of crafting an Origami vase is filled with challenges. Initial phases demand meticulous attention to model preparation, given the intricacy of its multiple facets. The sheer number of edges makes standard grinding tools obsolete. Furthermore, the demolding process demands careful strength application, given the design's delicacy. The molds themselves possess a limited lifespan, producing only four exquisite vases before necessitating replacement.`,
			},
			{
				title: `Usage Guidelines:`,
				text: `The Origami flower vase is versatile, complementing both indoor and outdoor settings. Its unique design shines even in smaller spaces. If you're in search of a chic and captivating gift, the concrete Origami vase stands out as an impeccable choice.`,
			}, {
				title:`Dimensions:`,
				text:`Width: 12 cm (7.72 In) / Height: 25 cm (9.84 In) / Weight: about 3 kg`
			}
			, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`,
				metaKeywords:`origami, concrete, flowers vase, art, art design, home decor`
			}
			
		],
		'unicus-cement-flower-vase': [
			{
				title: `Inspiration:`,
				text: `The Unicus line of products draws its inspiration from the Rubik's Cube, a 3D logic puzzle invented in 1974 by Ernő Rubik, which involves arranging colorful squares. While playing with the cube, it struck me that its simple structure of protruding cubes could look astonishing, serving as a delightful piece of home decor, especially in spaces with an industrial vibe. The Unicus can be utilized as a vase for flowers or as a planter for succulents.`,
			},
			{
				title: `Craftmanship:`,
				text: `Unicus is a considerably weighty decorative vessel made of cement. The casting process is straightforward, although the demolding (removal from the mold) demands considerable strength and concentration. The sharp edges and high tension of the mold might result in hand injuries or damage to the mold. However, the most significant challenge was designing the model and mold itself. This model consists of 180 squares along with their adjoining walls. Although I haven't counted them all, I must admit it took about two months to prepare the model. The end product, Unicus, is quite captivating and is bound to be the center of attention.`,
			},
			{
				title: `Usage Guidelines:`,
				text: `The Unicus cement vase can be used both indoors and outdoors. However, the Regulus concrete pot does not come with a drainage hole, so it's crucial always to use a kermazite substrate. When placing the Regulus outdoors, ensure that rainfall doesn't inundate the plant roots, as this could be detrimental. The Regulus concrete pot stands as an exclusive gift that will undoubtedly bring joy to its owner for many years.`,
			}, {
				title:`Dimensions:`,
				text:`Width: 12.5 cm (4.9 inches) / Height: 27.5 cm (10.8 inches) / Inner diagonal: 12 cm (4.7 inches)`
			}, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`
			}
		],
		'twistedsquare-cement-cigarette-ashtray': [
			{
				title: `Inspiration:`,
				text: `The "Twisted Square" series, meticulously designed with the wonders of our planet in mind, is a tribute to Earth's counter-clockwise rotation - a motion opposite to the traditional clockwise turn of a clock. Its helical design ensures that this unique piece presents a captivating view from every angle. And not to mention, the pronounced edges not only augment its architectural design but also catch the light in the most enchanting way, creating unparalleled reflections that elevate any space it occupies.`,
			},
			{
				title: `Craftmanship:`,
				text: `Precision and acute attention to detail were vital in achieving the razor-sharp edges of the Twisted Square cement ashtray. However, this feat of engineering wasn't the only hurdle we encountered. The unpredictability of concrete as a medium presented its own set of challenges. Despite utilizing the same mix, two separate casts can often result in varying shades, even if they are dried under identical conditions and timeframes. This anomaly, though intriguing, is a testament to concrete's capricious nature. A quick glance at the provided photos will showcase this phenomenon.`,
			},
			{
				title: `Usage Guidelines:`,
				text: `Perfectly suited for both cigarette and cigar aficionados, the concrete ashtray stands out as a thoughtful gift, seamlessly merging functionality with exquisite home decor. To maintain its pristine appearance and prevent discoloration, regular cleaning is recommended. If you choose to place this masterpiece outdoors, exercise caution during colder months. Ensure it remains free of water, as frozen liquid can cause it to crack, diminishing its aesthetic and functional value.`,
			}, {
				title:`Dimensions:`,
				text:`​Width: 11 cm (4.33 In) / Height: 6.4 cm (2.51 In) / Horizontal diagonal: 15 cm (5.91 In)`
			}, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`
			}, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`
			}
		],
		
		'heavyloop-concrete-phone-holder': [
			{
				title: `Inspiration:`,
				text: `HeavyLoop wasn't birthed from a whimsical idea or a fleeting muse but from a palpable necessity. As the world rapidly transitioned online amidst the pandemic, the frequency of virtual meetings skyrocketed. Surprisingly, amidst the plethora of tech gadgets available, an elegant smartphone holder suitable for a professional desk setting was noticeably absent. This gap sparked the concept for HeavyLoop. A phone holder that seemingly defies gravity, yet is anchored firmly in place, striking a balance between aesthetic allure and unyielding stability.`,
			},
			{
				title: `Craftmanship:`,
				text: ` Over time and through various projects, I mastered the art of casting objects from the bottom, ensuring the pouring point remains hidden from the eye, maintaining a flawless facade. However, with HeavyLoop, we ventured into unfamiliar territory by casting the object from the side. This technique resulted in one of the side walls being slightly uneven. Yet, after meticulous polishing and refining, it exudes a rugged charm. The defining feature of HeavyLoop, however, remains its razor-sharp edges, exemplifying precision and attention to detail.`,
			},
			{
				title: `Usage Guidelines:`,
				text: `The HeavyLoop smartphone holder, with its audacious and hefty design, appeals especially to those who harbor an appreciation for the unconventional, the asymmetric, and the gravity-defying. Despite its resilient stance, it's important to handle it with care. Its significant weight means a fall could have consequences, so always ensure it's securely placed, away from the table's edge. Especially keep it out of reach of young children. As both a functional piece and a statement in home decor, the HeavyLoop concrete holder is a perfect addition to any office setting or chic workspace. Gift it to someone with a discerning eye for design, and watch it transform their desk into a display of elegance and innovation.`,
			}, {
				title:`Dimensions:`,
				text:`Width: 11x9 cm (4,3x3,5 In) / Height: 21 cm (8,2 In) / Weight: about 2 kg`
			}, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`
			}
		],
		'lightwave-concrete-phone-stand': [
			{
				title: `Inspiration:`,
				text: `When envisioning the design for our phone stand, we were driven by an urge to challenge the typical attributes associated with concrete. How could we craft a piece that redefined the boundaries of thickness and weight while preserving the essence of concrete? After numerous prototypes, each with walls measuring around 4-5 millimeters in thickness, our vision materialized into what we now proudly call "LightWave." This exquisitely delicate phone stand, astonishingly weighing under 1 kg, represents an avant-garde approach to concrete design, making it stand out in its category.`,
			},
			{
				title: `Craftmanship:`,
				text: `LightWave's distinctiveness doesn't merely stem from its weight or dimensions. Unlike most concrete objects cast from the bottom, this piece is uniquely side-cast. Its slender wall, merely 8 millimeters in width, lends it a fragile charm, rarely associated with concrete. Extracting it from its mold is a meticulous task, given the mold's inherent instability due to the design. Each LightWave is a testament to our dedication to pushing the envelope in concrete craftsmanship.`,
			},
			{
				title: `Usage Guidelines:`,
				text: `With its unconventional form, the LightWave phone stand effortlessly draws attention, setting it apart from the stereotypical concrete items. Whether gracing an office desk or accentuating a stylish home setup, this concrete marvel is more than just a functional accessory; it's a statement piece. Ideal for design aficionados, the LightWave stand elevates any space it inhabits. Gift it to someone with an eye for innovative home decor or treat yourself to this masterpiece, and let it serve as a daily reminder of design's limitless possibilities.`,
			}, {
				title:`Dimensions:`,
				text:`Width: 9x8 cm (3,5x3,1 In) / Height: 18 cm (7,1 In) / Weight: about 1 kg`
			}, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`
			}
		],
		'helios-concrete-wall-clock': [
			{
				title: `Inspiration:`,
				text: `The Helios Wall Clock stands as a testament to the timeless energy and radiance of the sun, a celestial body that has been an eternal muse for many throughout the ages. As one of the final designs unveiled in the 2021 collection, this piece captures the essence of simplicity and elegance. Its intentional design, devoid of numerals, encourages an intuitive reading of time. Just as one feels the sun's passage through the sky without needing to constantly observe it, the Helios Wall Clock lets you gauge time with just a fleeting glance, inviting you to live in the moment.`,
			},
			{
				title: `Craftmanship:`,
				text: `While the casting process for Helios may seem straightforward, the intricacies lie in perfecting its unique face. Sculpting the model required patience, precision, and a deep understanding of form and balance. To imbue this contemporary piece with a touch of vintage charm, we meticulously source and incorporate hands from antique clocks. Each procured from local antique markets, these components not only elevate the clock's aesthetic but also weave in stories from a time gone by.`,
			},
			{
				title: `Usage Guidelines:`,
				text: `Despite its grand inspiration, the Helios Wall Clock boasts a modest diameter of 17 centimeters, making it a perfect fit for more intimate spaces. Whether it's nestled in a cozy reading nook, gracing a hallway, or adorning a compact office, its concrete surface splendidly refracts ambient light, creating a dance of shadows and highlights. This ever-changing play of light ensures that the clock looks different at every hour, just like the sun it's inspired by. A merger of artistic design and functional artistry, the Helios is more than just a timepiece; it's a conversation starter that promises to captivate and impress.`,
			}, {
				title:`Dimensions:`,
				text:`Diameter: 17,1 cm or (6,732 In) / Height: 3,5 cm (1,378 In)`
			}, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`
			}
		],
		'cannonball-cement-planter-pot': [
			{
				title: `Inspiration:`,
				text: `Every corner of history whispers tales that often go unnoticed, leaving behind remnants that silently narrate epochs gone by. The CannonBall L is one such tale, a cement planter pot echoing the rich chronicles of Lower Silesia. Smaller in stature but equally profound in its narrative, this design draws its essence from the ancient cannonballs, vestiges of monumental battles like the Hussite Wars and the Hundred Years' War. Discovering such an artifact, a tangible piece of history, was the muse behind transforming it into a design that seamlessly fuses yesteryears' gravitas with today's minimalistic elegance.`,
			},
			{
				title: `Craftmanship:`,
				text: `The intricacies involved in the creation of the CannonBall L cement planter pot are both an art and a challenge. Crafting a sphere, particularly one that mirrors the weightiness and presence of its historical counterpart, demands unmatched precision. Aligning the molds to perfection is a rigorous endeavor, as even a hair's breadth of deviation can disrupt its flawless contour. Although capturing perfection in each cast is a lofty aspiration, the slight variances that emerge bestow unique character upon each piece. The resulting polished facade, interspersed with these subtle nuances, refracts light in an entrancing ballet.`,
			},
			{
				title: `Usage Guidelines:`,
				text: `The CannonBall Mini cement planter pot, while exuding sophistication, is tailored for both indoor and alfresco settings. Given its solid cement composition, it's essential to integrate a kermazite substrate, ensuring your plants remain hydrated yet not waterlogged, especially crucial if the pot graces an outdoor location susceptible to unpredictable rainfall. Beyond its utility, the CannonBall Mini stands as a chic embellishment for any modish living area or a tasteful accessory for a sleek office desk. It's not just a vessel for plants; it embodies art, evokes conversations, and makes for an unparalleled gift for those with a penchant for design interwoven with tales of antiquity.`,
			}, {
				title:`Dimensions:`,
				text:`Weight of the set: about 5 kg.`
			}, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`
			}
		],
		'castor-concrete-tealight-stand': [
			{
				title: `Inspiration:`,
				text: `The Castor collection draws deep inspiration from the timeless allure of the regular pentagon. This shape, with its five equidistant sides, holds historical and symbolic significance that has resonated with cultures and civilizations throughout millennia. Its diagonals converge harmoniously to craft the evocative pentagram, a symbol that has been revered, interpreted, and celebrated in countless ways. In our humble capacity as concrete artisans, we've chosen not to delve into the vast interpretative ocean of pentagonal symbolism. Instead, we've anchored our creation in the raw beauty of the shape, inviting you to embark on your own journey of meaning, while we bask in its sheer geometric elegance.`,
			},
			{
				title: `Craftmanship:`,
				text: `While molding petite concrete structures may seem like a straightforward task, the nuances in the Castor design present their unique challenges. The meticulous process requires utmost care, especially during the demolding phase. This is due to the susceptibility of the molds to "chafing" or wear when extracting the finished piece. Such intricacies, although seemingly minor, necessitate a gentle touch and understanding of the material, ensuring each tealight stand retains its pristine form while acknowledging the fragile nature of its mold.`,
			},
			{
				title: `Usage Guidelines:`,
				text: `The Castor tealight stand is a quintessential piece for those seeking to infuse their living spaces with a touch of artistic design and ethereal ambiance. Whether perched atop a bedroom nightstand or gracing a living room centerpiece, its presence is bound to elevate any setting. The flickering glow of the candlelight interacts beautifully with the stand's sharp edges, casting intriguing patterns and reflections. Beyond the confines of interior spaces, it also finds its place in outdoor settings, transforming gardens and patios into enchanting realms. Thoughtfully sized to accommodate tealights, this concrete masterpiece promises to be a captivating addition to your home decor repertoire.`,
			}, {
				title:`Dimensions:`,
				text:`Width: 9 cm / Height: 5 cm / Weight: about 0.5 kg`
			}, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`
			}
		],
		'regulus-beton-flower-vase': [
			{
				title: `Inspiration:`,
				text: `At the core of our Regulus collection is the undeniable charm of the square - a shape that epitomizes balance and symmetry. Emerging from the pure essence of this four-sided figure, the Regulus concrete vase elevates its design by integrating an astonishing 180 miniature diamond. These fine details, paired with the vase's multifaceted edges, metamorphose it from just a functional item to an art piece that garners attention and ignites conversations. From its inception, the Regulus vase has ventured beyond confines, gracing living spaces from Europe to North America, bearing witness to its global allure and our unwavering dedication to craftsmanship.`,
			},
			{
				title: `Craftmanship:`,
				text: `Each Regulus flower vase, weighing in at a robust 5 kilograms, stands as a grand testament to our commitment and the sheer physical effort in the crafting journey. But the weight isn't its only defining attribute. Before this concrete marvel could take shape, the prototype mold required careful and exacting refinement. The process of honing the surface of these 180 diamonds was an endeavor that spanned almost three months. Our hands felt the intensity of this rigorous task, enduring strains and weariness. Yet, every effort, every meticulous detail was justified by the final creation - a symbol of unwavering dedication and precision.`,
			},
			{
				title: `Usage Guidelines:`,
				text: `Crafted with adaptability in mind, the Regulus flower vase effortlessly complements both indoor and outdoor environments. With its cutting-edge design, Regulus is not just a vessel for flowers but an emblem of artistic pursuit. Whether adorning your personal space or presented as a treasured gift, it pledges to endure, showcasing both beauty and functionality in harmony.`,
			}, {
				title:`Dimensions:`,
				text:`Width: 14 cm (5.5 inches) / Height: 24 cm (9.4 inches) / Inner diagonal: 14 cm (5.5 inches)`
			}, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`
			}
		],
		'regulus-concrete-flower-pot': [
			{
				title: `Inspiration:`,
				text: `At the heart of our Regulus collection lies the intrinsic allure of the square, a shape that celebrates equilibrium and symmetry. Derived from the unadulterated essence of this four-sided figure, the Regulus concrete pot elevates its design by incorporating a staggering 180 miniature diamond facets. This intricate detail, coupled with the pot's multi-faceted edges, transforms it into more than just a functional item - it becomes a statement piece, a conversation starter. Since its inception, Regulus has transcended borders, finding its way into homes across Europe and North America, serving as a testament to its universal appeal and our commitment to artistry.`,
			},
			{
				title: `Craftmanship:`,
				text: `Every Regulus flower pot, with its substantial weight of approximately 7 kilograms, stands as a monumental tribute to our dedication and physical exertion in the crafting process. However, the weight isn't the most challenging aspect of its creation. Before this concrete masterpiece could be cast, the precursor mold itself underwent meticulous refinement. The act of perfecting the surface of these 180 diamonds was a labor of love that spanned nearly three months. Our fingers bore the brunt of this painstaking process, facing fatigue and discomfort. Yet, every ache, every exertion was worth the final product - an embodiment of dedication and precision.`,
			},
			{
				title: `Usage Guidelines:`,
				text: `Designed with versatility in mind, the Regulus flower pot can seamlessly grace both indoor and outdoor spaces. If you opt for indoor placements, ensure the use of a kermazite substrate, as the pot doesn't feature drainage capabilities. For those who envision its presence outdoors, it's crucial to shield your plant's roots from excess rainwater, ensuring their well-being. With its avant-garde design, Regulus is not just a succulent pot but a testament to artistic endeavor. Whether for your personal space or as a cherished gift, it promises to stand the test of time, offering beauty and functionality in equal measure.`,
			}, {
				title:`Dimensions:`,
				text:`External Dimensions: 22 cm x 22 cm or 8.6 x 8.6 In / Height: 20 cm or 7.9 In`
			}, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`
			}
		],
		'twisted-sqaure-concrete-vase': [
			{
				title: `Inspiration:`,
				text: `The Twisted Square collection draws its muse from the rhythmic dance of our very planet. As Earth pirouettes counterclockwise on its axis, defying the conventions of timekeepers, so too does our design challenge the conventional. Evoking the earth's rotation through its spiraled design, the Twisted Square pot ensures a captivating view from every angle. Its emphatic edges do more than define its form; they sculpt the very ambiance around it, bending and bouncing light in unforeseen patterns and painting the surroundings with its ever-changing luminous dance.`,
			},
			{
				title: `Craftmanship:`,
				text: `The vision behind the Twisted Square was as ambitious as it was aesthetic. Our aspiration was not just to mold concrete into form but to give it an edge – a razor-sharp one at that. While this edge accentuates its avant-garde design, making it an undeniable centerpiece, it also poses significant challenges during its birth. Extracting such a meticulously designed piece from its mold demands not just strength but a deep understanding of its delicate intricacies. This labor-intensive process, unfortunately, accelerates the wear and tear on our molds. But for us, every effort, every mold sacrificed, is a testament to our unwavering commitment to artistic perfection.`,
			},
			{
				title: `Usage Guidelines:`,
				text: `Versatility is the hallmark of the Twisted Square design. While it can nestle succulents with grace, its true prowess lies as a flower vase, effortlessly cradling both wide, lavish bouquets and more minimalistic floral arrangements. Crafted from the finest architectural concrete, every casting becomes a canvas showcasing the idiosyncrasies of this material. The meticulous incorporation of silicon and wax impregnations not only fortifies its surface but imparts a unique texture and finish. This unpredictability, where each piece might reveal a pattern or hue slightly different from its kin, brings a sense of surprise and delight to our crafting journey, ensuring that every Twisted Square flower vase is, in essence, a unique work of art.`,
			}, {
				title:`Dimensions:`,
				text:`Width 11 cm (4.33 In) / Height 22 cm (8.66 In) / Horizontal diagonal 15 cm (5.91 In)`
			}, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`
			}
		],
		'cannonball-xl-concrete-planter-pot': [
			{
				title: `Inspiration:`,
				text: `The tapestry of history weaves stories into the very fabric of our surroundings, often leaving behind artifacts that stand as silent witnesses to the tales of bygone eras. Such is the genesis of the CannonBall concrete planter pot, a harmonious blend of antiquity and contemporary design. Deeply rooted in the rich lore of Lower Silesia, this unique piece draws its inspiration from centuries-old cannonballs - relics of monumental conflicts like the Hundred Years' War and the Hussite Wars. Stumbling upon such a historically charged artifact near my residence ignited the spark to conceive a design that would merge this ancient relic with the minimalistic sensibilities of the modern world.`,
			},
			{
				title: `Craftmanship:`,
				text: `Each CannonBall concrete planter pot stands as a testament to the artistry and challenges faced during its creation. Perfectly casting a sphere, especially one that embodies the heft and aura of a cannonball, is no trivial task. The precision required in aligning the molds is paramount, as even the slightest misalignment can mar its flawless curvature. Despite numerous attempts, achieving an utterly immaculate cast remained elusive. However, these very imperfections, unintentional though they might be, add character to each pot. The resulting smooth surface, juxtaposed with its unexpected structural nuances, captures and reflects light in a mesmerizing dance.`,
			},
			{
				title: `Usage Guidelines:`,
				text: `Marrying form with function, the CannonBall concrete planter pot is adept for both indoor and outdoor settings. Its solid concrete design, however, lacks drainage capabilities, making the use of a kermazite substrate imperative. This ensures optimal moisture levels for your plants, especially crucial if placed outdoors, where excess rainfall can potentially saturate and harm the plant's roots. Beyond its primary function, the CannonBall serves as an exquisite addition to any living space or a stylish adornment for a contemporary desk setup. It is more than just a planter; it is a piece of art, a conversation starter, and a unique gift for those who possess an eye for design and a heart for history.`,
			}, {
				title:`Dimensions:`,
				text:`Maximum diameter: 22 cm or 8,6 In (3,94 In) / Height: 16 cm (6,3 In) / Inner Pot Depth: 14 cm (5,5 In) / Diameter of the outer upper edge: 18,5 cm (7,3 In) / Diameter of the inner top edge: 16,2 cm (6,4 In)`
			}, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`
			}
		],
		'spica-concrete-tealight-holder': [
			{
				title: `Inspiration:`,
				text: `The ethereal beauty of the cosmos, with its vast expanse of stars and constellations, stands as a testament to the infinite wonders of the universe. Inspired by these celestial wonders, our Spica concrete tealight holder emerges as a tangible reflection of the heavens above. Drawing its name from the luminescent Spica, the brightest star in the constellation Virgo and one of the most dazzling celestial bodies in our night sky, this design marvel mirrors the star's twelve radiant angles. Situated about 250 light years from our home planet, Spica's brilliance transcends through eons and now finds a place in contemporary homes with our intricately crafted tealight holder.`,
			},
			{
				title: `Craftmanship:`,
				text: `Every Spica - concrete tealight holder stands as a labor of love, blending the ethereal with the tangible. While the process of casting small concrete molds might appear straightforward, the true essence of the craft lies in the minute details. The journey from conceptualizing to realizing the Spica concrete tealight holder is both an artistic and technical endeavor. Each mold, carefully curated and cast, seeks to embody the mesmerizing allure of its celestial namesake, resulting in a piece that is as much a tribute to our cosmic inspirations as it is to impeccable craftsmanship.`,
			},
			{
				title: `Usage Guidelines:`,
				text: `Designed with a modern sensibility, the Spica concrete tealight holder is tailor-made for tealight candles, adding a touch of elegance and sophistication to any setting. While its structure and design make it a stunning addition to indoor spaces, it's essential to remember that its open form lacks a flame guard, making indoor use preferable. Each of its twelve walls is meticulously crafted to interact with the soft glow of a candle's flame, creating a dance of light and shadow that is nothing short of magical. Beyond just being a functional item, it serves as an artistic statement, bringing the charm of the cosmos right to your living space at a price that, while delivering unparalleled quality, doesn't break the bank.`,
			}, {
				title:`Dimensions:`,
				text:`Width: 10 cm (3,93 In) / Height: 6 cm (2,36 In) / Weight: about 0,5 kg`
			}, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`
			}
		],
		'origami-concrete-candle-holder': [
			{
				title: `Inspiration:`,
				text: `Delving deep into the intricate art forms of the East, our Origami concrete candle holder is a manifestation of our profound admiration for Chinese culture. This product line pays homage to the ancient Chinese art of paper folding, which resonates with creativity and limitless imagination. Each facet of the candle holder, while evoking a sense of expansive grandeur, is carefully crafted to adapt to both open and more intimate spaces. The very essence of Origami, with its countless possibilities and transformative nature, opens up a horizon of design possibilities, letting us craft pieces that are as sophisticated as they are enthralling.`,
			},
			{
				title: `Craftmanship:`,
				text: `The elegance of the Origami concrete candle holder, despite its seemingly compact design, is a testament to the meticulousness that goes into its crafting. At a glance, one might believe that these candle holders are fairly straightforward to produce, given their size. Yet, therein lies the true challenge. Each holder, due to its multifaceted design, undergoes a unique hydration process, ensuring that no two pieces are ever truly identical in color. This unpredictability, far from being a flaw, adds to the allure of each piece, making every single one a unique artwork in its own right.`,
			},
			{
				title: `Usage Guidelines:`,
				text: `Designed with versatility in mind, the Origami concrete candle holder seamlessly graces both indoor and outdoor settings. Its design, while sophisticated, is adaptable even to the most compact spaces, making it an ideal adornment for any setting. Beyond its function as a holder for illuminating candles, this piece serves as an emblem of modern design, offering tremendous value for a remarkably affordable price. Whether you're seeking to accentuate your own space or searching for a distinctive gift, especially for someone with a penchant for contemporary aesthetics, the Origami concrete candle holder stands out as a symbol of artistic flair and unparalleled craftsmanship.`,
			}, {
				title:`Dimensions:`,
				text:`Width: 10 cm (3,94 In) / Height: 6 cm (2,36 In) / Weight: about 0,5 kg;`
			}, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`
			}
		],
		'regulus-concrete-cigarette-ashtray': [
			{
				title: `Inspiration:`,
				text: ` The Regulus collection is anchored in the timeless allure of the square, a symbol of harmony and balance. Diving deeper into this essence, we introduce the Regulus cigarette ashtray - a sophisticated melding of form and function. Drawing from the core design elements that made the Regulus pot an sensation, the ashtray integrates the series' signature 68 diamond facets, delivering a piece that doesn't merely serve its purpose but captivates the observer. The ashtray, with its multidimensional facets, becomes not just an accessory but an artwork, a topic of discourse, reinforcing our belief that even everyday objects can be imbued with artistic vision.`,
			},
			{
				title: `Craftmanship:`,
				text: `The creation of the Regulus - concrete cigarette ashtray is a feat of artistry and labor. Weighing considerably less than the flower pot, its real challenge lies in the delicate molding process. The intricate design of the 68 diamonds requires keen attention to detail and a finesse that has been refined over months of relentless practice. This painstaking process, spanning approximately three months, saw our hands tirelessly etching, carving, and refining to achieve that desired perfection. Every minute spent, every gentle caress of the mold was in pursuit of crafting an ashtray that wasn't just functional but also an epitome of design excellence.`,
			},
			{
				title: `Usage Guidelines:`,
				text: `The Regulus concrete ashtray, with its avant-garde design, promises to elevate any space it occupies. While it primarily serves as an ash receptacle, its design ensures it stands out, becoming an artistic focal point whether placed on a coffee table, an office desk, or an outdoor setting. The use of premium-grade architectural concrete ensures durability, while its unique design makes cleaning a breeze. Its presence speaks of refined tastes and an appreciation for the subtleties of design. Whether you're a smoker or not, the Regulus concrete ashtray can also serve as a decorative piece, making it an exceptional gift for those who value the confluence of art and utility.`,
			}, {
				title:`Dimensions:`,
				text:`Width: 11 cm (4,33 In) / Height: 22 cm (8,66 In) / Horizontal diagonal: 15 cm (5,91 In) / Weight: about 4 kg`
			}, {
				metaTitle:`Origami concrete flower vase - MagicConcrete Design`,
				metaDescription:`Zobacz niesamowity Origami concrete flower vase, który otwiera oczy niedowiarkom i powoduje pocenie sie rąk u krytyków sztuki. Jedyny i niepowtarzalny element.`
			}
		],
		
	}

	const name = location.pathname.slice(1)

	const capitalizeFirstLetter = word => {
		return word.charAt(0).toUpperCase() + word.slice(1)
	}

	const transformString = title => {
		const words = name.split('-')

		//first word of title

		words[0] = capitalizeFirstLetter(words[0])

		// last word of title
		if (words.length > 1) {
			words[words.length - 1] = capitalizeFirstLetter(words[words.length - 1])
		}

		return words.join(' ')
	}

	const title = transformString(location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' '))

	const ContentGenerator = (props) => {
		return description[props.name].map((item, index) => (
			<div key={index}>
				<h4>{item.title}</h4>
				<p>{item.text}</p>
			</div>
			
		));

		
	}

	useEffect(() => {
		document.title = description[props.name][4].metaTitle
		document.querySelector('meta[name="description"]').setAttribute("content", description[props.name][4].metaDescription);
		document.querySelector('meta[name="keywords"]').setAttribute("content", description[props.name][4].metaKeywords);
	  }, []);

	return (
		<div className='description'>
			<h1>{title}</h1>
			<SalesButons name={name}/>
			<ContentGenerator name={name} />
		</div>
	)
}

export default Content
