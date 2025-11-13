"use client";

import { Award, Battery, BookOpen, Facebook, Heart, Instagram, Leaf, Mail, Shield, Star, Target, Twitter, Zap } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="animatedAurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Blog", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="FreshFruit"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Fresh Fruits for a Healthy Life"
          description="Discover the natural goodness of fresh, organic fruits delivered right to your doorstep. Packed with vitamins, minerals, and antioxidants for your daily wellness."
          tag="Pure & Natural"
          tagIcon={Leaf}
          buttons={[
            { text: "Explore Fruits", href: "features" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://pixabay.com/get/g14bfce2142f2bd5a0c34a750b253df6f5aed80ad0f02e834fae0dc8c39a47e2b6c567c9981611f04fe7e080b8bf02368ddfd5208116f0c08253fd232ce57e779_1280.jpg"
          imageAlt="Colorful assortment of fresh organic fruits"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Why Fresh Fruits"
          description="At FreshFruit, we believe that nature provides the best nutrition. Our carefully selected fruits are sourced from local organic farms, ensuring maximum freshness, flavor, and nutritional value. We're committed to bringing you the purest fruits that nature has to offer, supporting both your health and sustainable farming practices."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="Fruit Benefits"
          description="Discover the amazing health benefits that fresh fruits bring to your daily nutrition"
          tag="Health Benefits"
          tagIcon={Heart}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          showIconBoxBackground={true}
          features={[
            {
              title: "Rich in Vitamin C",
              icon: Zap
            },
            {
              title: "Natural Antioxidants",
              icon: Shield
            },
            {
              title: "High in Fiber",
              icon: Target
            },
            {
              title: "Natural Energy",
              icon: Battery
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What People Say"
          description="Hear from our customers about their fresh fruit experience"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Nutritionist",
              testimonial: "The quality of fruits from FreshFruit is outstanding. My clients love the freshness and taste, and I can see the positive impact on their health.",
              imageSrc: "https://pixabay.com/get/ge825e74d3121c6f3c39006b37025735c8097f459c6d0ff83f792dbbca272ee924a1276ee3aa218ba62423fd77633a0125c08347156a174d7931acbf51bcdb613_1280.jpg",
              imageAlt: "Sarah Johnson, Nutritionist"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Fitness Trainer",
              testimonial: "I recommend FreshFruit to all my clients. The natural energy boost from these fruits is incredible for pre and post workout nutrition.",
              imageSrc: "https://pixabay.com/get/ga161aacda7977bb823776f658a8be6fe3b64d2eef259e725c007d78582e03d8e63df00aa6b789b7a744c824af8f5b6ec1a6d0d35050a575ebf88d0a4d0e942de_1280.jpg",
              imageAlt: "Mike Chen, Fitness Trainer"
            },
            {
              id: "3",
              name: "Dr. Emily Rodriguez",
              role: "Dietitian",
              testimonial: "As a dietitian, I'm impressed by the nutritional value and freshness. These fruits are perfect for my patients' dietary plans.",
              imageSrc: "https://pixabay.com/get/g955398bcd71900f76779748114769708d0b9d6e251909c7f8b1c8d0774445a073ac8c343e8c8682d40b0814abbbc6186774b01a2e015bc35c56eec5189fb8d2b_1280.jpg",
              imageAlt: "Dr. Emily Rodriguez, Dietitian"
            },
            {
              id: "4",
              name: "Chef David Kim",
              role: "Professional Chef",
              testimonial: "The flavor profile of these fruits is exceptional. They elevate every dish I create and my customers notice the difference.",
              imageSrc: "https://pixabay.com/get/g153ab8b854c22fd6d05e12773ac89f26ce828180c183b92caa62ae3cf1e7d285a722886100bc3a100e06a2160db1adf6ac78c7bbcb86fc7fd595b9bce58136e1_1280.jpg",
              imageAlt: "Chef David Kim, Professional Chef"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Health Brands"
          description="Leading nutrition and wellness companies trust our premium fruit quality"
          tag="Partners"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g63854da2ff1038a78dd7648fe7eb5950a340f27c771f5e29fc338a2d99292935cdce6ccbc8656d8a9eb1d7a22bdac36160d12323695d181983414ef902f75bb2_1280.jpg",
            "https://pixabay.com/get/ge6c23e6a54ec85547188c2f993ad5eabb0b35318a16a242dab7aa0bbd796f3cfca9d620cac31811551a990a1476331e27b7c0e06787ae44ade87e8d31c3923b2_1280.jpg",
            "https://pixabay.com/get/g47b1b1eeb8b2727e0a870cf979fd5e00a899d6ca650112561f37135e4a12bd606d2844625c528df6c2a6fae788be697a4132f007cd02df51c78672b7f2c4209d_1280.jpg",
            "https://pixabay.com/get/g35fdd6e999eeca16b38d93f4d708a0bffde5a849a4acbd308c40835c603f56fb652cd53871102b177baf5ffc0acb1bf65f3af8b8858c3b3e61739614f739a4d2_1280.jpg",
            "https://pixabay.com/get/g8cad789a16ef6a2489eff1dfd51d1a9334ce1d7e34a30484c4d183bf4e06d53463717d27e45ddbd06e63a999d858b75451fbf8e9fd3f9fc00bb4f88350aafc58_1280.jpg",
            "https://pixabay.com/get/g94460b4077bf68cbb7cf88306a8da26b941dcd1c76e916ec4fca5683ff7b00a94f8fbbeff619337932b883c46e6f520530b7f9de6ac889142880a1f52e0f6363_1280.jpg",
            "https://pixabay.com/get/gb9a77c3dc9766202cfc16fec9efb43996faa195d9d0abb8d9e1f8b1cbb5ec591e1cd0073fb793febd35024265ee8b2d1e9bc6efc0b567fbef3c9885dc9a4ab52_1280.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Fruit Knowledge Hub"
          description="Explore articles about nutrition, recipes, and the latest in fruit science"
          tag="Learn"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Nutrition",
              title: "Top 10 Fruits for Daily Nutrition",
              excerpt: "Discover which fruits provide the most essential vitamins and minerals for your daily health needs",
              imageSrc: "https://pixabay.com/get/g84d7c4b60b89bfd13de68a27df92ebb0b34f0c25701320b71b2d28693806f9c3652dafeceb55370c74e99d7b830f0f38bb34fa6582d02b7dbf2651218bdfdb9d_1280.jpg",
              imageAlt: "Nutritional benefits of various fruits",
              authorName: "Dr. Lisa Park",
              authorAvatar: "https://pixabay.com/get/g955398bcd71900f76779748114769708d0b9d6e251909c7f8b1c8d0774445a073ac8c343e8c8682d40b0814abbbc6186774b01a2e015bc35c56eec5189fb8d2b_1280.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Seasonal",
              title: "Best Seasonal Fruits Guide",
              excerpt: "Learn about the best fruits for each season and how to maximize their nutritional benefits",
              imageSrc: "https://pixabay.com/get/g49b4ce8310e98fe1827a57c25d0ea2e2b2399408e91577f230c65cb2aa8f9885962470aa14cc7a33319c2fae33b0aba8eb6c7def07cc21779698f6fc9710f7b2_1280.jpg",
              imageAlt: "Seasonal fruits calendar",
              authorName: "Mark Thompson",
              authorAvatar: "https://pixabay.com/get/ga161aacda7977bb823776f658a8be6fe3b64d2eef259e725c007d78582e03d8e63df00aa6b789b7a744c824af8f5b6ec1a6d0d35050a575ebf88d0a4d0e942de_1280.jpg",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Recipes",
              title: "Healthy Fruit Smoothie Recipes",
              excerpt: "Delicious and nutritious smoothie recipes that combine the best flavors and health benefits",
              imageSrc: "https://pixabay.com/get/gec845f750a768b7832cc27d7264d869ed6fe9d8dee02f9c245368b3f12d05d6e1717915b7db19a4e6efee2803c31fe9bc9816b6eae35c791eacfcf95907aaeb1_1280.jpg",
              imageAlt: "Colorful fruit smoothies",
              authorName: "Chef Maria Garcia",
              authorAvatar: "https://pixabay.com/get/g6c5d16a031b7c8c9eef442b337e22eb39551bae101b528b2c0e0701ce17a8d06f6cb997d71d2ff8d88c7d5e4943a3e3ac717b59fc3723548c7ee6113d8640e7a_1280.jpg",
              date: "10 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Fresh"
          title="Start Your Healthy Journey"
          description="Join thousands of satisfied customers who enjoy fresh, organic fruits delivered to their door. Sign up for our newsletter to get tips, recipes, and exclusive offers."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="By subscribing, you agree to receive our newsletter and promotional emails. You can unsubscribe at any time."
          imageSrc="https://pixabay.com/get/gd112f8fd58a1a9c248b5aa28242034c24fdb9e902123680df92a5cc8d5ebb873708aef1a87ae89d3afec3939cd590f43ca9480328de5ea36edde1cf99b0a9c72_1280.jpg"
          imageAlt="Fresh fruit delivery service"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="FreshFruit"
          columns={[
            {
              title: "Products",
              items: [
                { label: "Seasonal Fruits", href: "features" },
                { label: "Organic Selection", href: "features" },
                { label: "Fruit Boxes", href: "features" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Sustainability", href: "about" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Nutrition Guide", href: "blog" },
                { label: "Recipes", href: "blog" },
                { label: "Health Tips", href: "blog" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "contact" },
                { label: "Delivery Info", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
          copyrightText="© 2025 FreshFruit. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}