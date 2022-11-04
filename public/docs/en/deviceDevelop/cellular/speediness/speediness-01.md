# Create a Product

## __Scenario Description__

Aromatherapy life has slowly become a trend. Elegant and fashionable aromatherapy diffuser is not only the good companion of essential oils, but also a nice decoration. Star hotels, chain restaurants, even high-end clothing brand stores and hair salons have used fragrance for marketing. We build an smart  __aromatherapy diffuser__ solution based on __Quectel modules with QuecThing feature__ and __Developer Center__  from the device end to the cloud, so that you can have the experience of quick access to the cloud. Wherever you are, you can query the remaining essential oil capacity of aromatherapy diffuser and switch the operating mode in batch and in real time on __Developer Center__ .  This document describes how to create a product on  __Developer Center__ .

## __Overview__

The Developer Center is the one-stop IoT development platform provided by Quectel. The following three parts will demonstrate the operation steps of Developer Center from logging in to Developer Center to creating a product.

## __1. Log in to Developer Center__

Log in to <a :href="toDevelopCenter(null, 'en')" target="_blank">Developer Center</a> . Click <a :href="toDevelopCenter('registerType', 'en')" target="_blank">Register Now</a> to finish the registration if you have not registered an account.


## __2. Create a Project__

Create a project named  __“Quectel International Hotel”__  to demonstrate the project management in hotel industry.

<a data-fancybox title="img" href="/en/deviceDevelop/platform/platform-01.png">![img](/en/deviceDevelop/platform/platform-01.png)</a>

## __3. Create a Product__

Creating a product is the first step in the product development process. A product is an abstract description of a class of devices defined by Developer Center, which is used to manage the same kind of devices. When creating a product, you need to select a data protocol, which includes two data formats:  __TSL__ and __Custom__. The following two data format products are created as examples. You can choose one of them based on actual service scenarios.

* __TSL Format Overview__

  __TSL__  refers to the digital representation of the device in Developer Center and the entity data model constructed in the cloud. The standard data format defined by Developer Center is __TSL__ , which is the data format of communication between Developer Center and the device. A TSL model is divided into three dimensions: __Property__ , __Service__, __Event__.  After the TSL is saved, that is, the TSL-format product is defined, Developer Center starts to parse, verify and process the data.

* __Custom Format Overview__ 

  __Custom__ refers to that whatever the transmitted  content is, the model is only responsible for the data transmission between the device and Developer Center without making any changes to the data content, and Developer Center will not parse the data content. The data in custom format is referred to as transparent transmission data in our documents. Among hardware devices, there may be some devices __whose hardware configuration is low__ or  __which cannot build a TSL model__ to communicate with Developer Center. For such devices, you can select __Custom__ to transparently transmit the raw data to Developer Center.

<font color=#999AAA >Note: ProductKey (hereinafter referred to as "PK") and ProductSecret(hereinafter referred to as "PS") should be in safekeeping, because they will be used for device authentification and product deletion.</font>

### __a. Create a TSL-format Product__

After creating a project, select the project and click __Create a Product__ to create a product and name the product __“Smart Aromatherapy Diffuser”__ . This example demonstrates the data format of __TSL__ , as shown below.

<font color=#999AAA >Precondition: When the category selected when creating a product is labeled with "Standard", it means that the standard TSL has been defined for that category.</font>

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/platform/platform-02.png">![img](/en/deviceDevelop/cellular/speediness/resource/platform/platform-02.png)</a>

### __b. Create a Custom-format Product__

After creating a project, select the project and click __Create a Product__ to create a product and name the product __“Smart Aromatherapy Diffuser”__ . This example demonstrates the data format of  __Custom__ , as shown below.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/speediness/resource/platform/platform-03.png">![img](/en/deviceDevelop/cellular/speediness/resource/platform/platform-03.png)</a>

<font color=#999AAA >Note: Feature definitions will not take effect when you select "Custom" as data format and the standard TSL model of the product category.</font>

  
