import React, { useState } from "react";

const TermAndConditions = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="font-sans bg-gray-100 text-gray-900 p-6 sm:p-10 max-w-5xl mx-auto">
      <h1
        className={`text-3xl sm:text-4xl font-bold text-center mb-8 transition-colors duration-300 cursor-pointer ${
          hovered ? "text-orange-800" : "text-orange-600"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Merchant Terms & Conditions
      </h1>

      <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-300 shadow-md">
        <pre className="whitespace-pre-wrap break-words text-base leading-relaxed font-serif font-semibold text-gray-800">

{`
This document is an electronic record in terms of the Information Technology Act, 2000 and rules
there under as applicable and the amended provisions pertaining to electronic records in various
statutes as amended by the Information Technology Act, 2000. This document is published in
accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries
guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Merchant
T&C (as defined below) for access or usage of www.swiggy.com website and ‘Swiggy’ application
for mobile and handheld devices.
Any Capitalized terms used but not defined herein shall have the meaning assigned to them under the
(i) the services agreement executed between Swiggy and the Merchant and (ii) Privacy Policy and
Terms of Use, as amended from time to time which govern your use of our website www.swiggy.com
(the “Website”) and our ‘Swiggy’ application for mobile and handheld devices (the “App”). You wish
to avail the Platform Services enabled by Swiggy on a non-exclusive and contractual basis subject to
the terms and conditions set out hereinafter. Merchant and Swiggy are referred individually as ‘Party’
and collectively as ‘Parties’, wherever the context so requires.
·
I. These terms are called the “Merchant T&C” and these Merchant T&C read together with the
Privacy Policy, Terms of Use and the agreements executed between the Parties shall govern your use
of Platform. In the event of any inconsistency between the documents/agreements, the terms of the
agreement will prevail over these Merchant T&C, which will prevail over the Terms of Use. Please
read these Merchant T&C carefully before you use the Platform Services. If you do not agree to these
Merchant T&C, you must not use the Platform Services, and we request you to uninstall the App. By
installing, downloading or even merely using the Platform, you shall be contracting with Swiggy and
you signify your acceptance to this Merchant Terms, Terms of Use and other Swiggy policies
(including but not limited to the Privacy Policy being incorporated by reference herein) which take
effect on the date on which you download, install or use the Platform Services, and create legally
binding arrangements to abide by the same.
II. These Merchant T&C along with the services agreement or any other agreement signed
between the Parties shall constitute the entire agreement between the Parties in relation to the
Platform Services.
III. The Platform is owned and operated by Swiggy Limited, a company incorporated under the
laws of India and having its registered office at No.55, Sy.no. 8-14, I & J Block, Ground Floor,
Embassy Tech Village, Outer Ring Road, Devarabisanahalli, Bangalore - 560103, India. For the
purpose of these Merchant Terms, wherever the context so requires “you” or “user” shall
mean any natural or legal person who has agreed to become a merchant on the Platform by providing
registration data during the registration/ onboarding on the Platform as a registered partner using the
computer systems. The term “Swiggy”, “we”, “us” or “our” shall mean Swiggy Limited.
IV. Swiggy enables transactions between the buyers (“Buyers”) and participant merchants dealing
in selling of FMCG, consumer goods, grocery, electronics, pharmaceutical products etc.. The Buyers
who visit the Platform can choose and place orders (“Orders”) from variety of products made
available for sale by various merchants like you (“Merchant/s”) on the Platform.
V. Swiggy also enables Facilitation Services i.e. transactions between the pick-up and delivery
partner (“PDP”) and the Buyers for delivery of such Orders at select localities of serviceable cities
across India.
VI. These Merchant T&C are subject to modifications, and we reserve the right to modify or
change the Merchant T&C and other Swiggy policies at any time by posting changes on the Platform
and we may intimate you of the changes . Swiggy might choose to communicate such modifications
in a separate email and any other form of communication to you for your ready reference. However,
Merchant shall, at all times, be responsible for regularly reviewing the Merchant T&C and other
Swiggy
policies and note the changes made on the Platform, including but not limited to this page. Your
continued use of the Platform and the Platform Services after any change is posted or shared with you,
confirms your acceptance of the amended Merchant T&C and other Swiggy policies.
VII. General Conditions
a. All commercial/contractual terms are offered by you and agreed by the Buyers alone with
respect to product and services you provide on the Platform. Swiggy is only providing a platform for
communication and facilitation, and it is agreed that the contract for sale of any of the products or
services shall be a strictly bipartite contract between the Merchant and the Buyer. The
commercial/contractual terms include without limitation, price of the products, applicable taxes,
shipping costs, payment methods, payment terms, date, period and mode of delivery, quality and
warranties related to products and after sales services related to products. Swiggy does not have any
control or does not determine or advise or in any way involve itself in the offering or acceptance of
such commercial/contractual terms between the Buyers and Merchants.
b. Swiggy does not make any representations, guarantees or warranties of the products sold by
the Merchants on the Platform, to the Buyers.
c. Swiggy is not responsible for any non-performance or breach of any contract entered into
between Buyers and Merchants, or Buyers and PDPs, or Merchant and PDPs on the Platform. Swiggy
cannot and does not guarantee that the concerned parties will perform their part of obligation in any
transaction concluded on the Platform. Swiggy is not responsible for non-performance or
unsatisfactory services or damages or delays as a result of products which are out of stock,
unavailable or back ordered.
d. Swiggy is operating an online marketplace and assumes the role of facilitator only. Swiggy
shall not hold any title or interest over the products nor shall Swiggy have any obligations or liabilities
in respect of such contract entered into between Merchant and Buyer including but not
limited to product liability.
e. In case of complaints from the Buyer pertaining to product efficacy, quality, or any other such
issues, Swiggy shall notify the same to Merchant and shall also redirect the Buyer to the consumer
call centre, wherever applicable. Merchant shall alone be liable for redressing and bound to take
action on the complaints by the Buyer. Swiggy has the right to share with the Buyer, the relevant
information including the Merchant details to enable satisfactory resolution of the complaint.
f. You agree that Swiggy is not responsible for any dealing with underage persons or people
acting under false pretence.
g. You agree, undertake and confirm that your use of Platform shall be strictly governed by the
binding principles more fully detailed in the Terms of Use.
h. Swiggy may provide recommendations on various campaigns, product categories, and
discounts based on analytics, data gathering exercises, etc. The Parties may mutually agree on various
modalities for providing discounts, if any, on the products sold by the Merchant on the Platform from
time to time. The Merchant shall, in its sole discretion, follow/not follow the recommendations of
Swiggy.
VIII. Terms and Conditions of Platform Services
a. Swiggy provides no assurance and/or guarantees towards a Buyer placing Orders with any
Merchant/s. The Merchant shall be solely responsible for display of the name/details of the store and
images of the items/products, which shall be listed for the Buyers to choose from. The Merchant shall
be liable to comply with the Drugs and Cosmetics Act, 1940, the Drugs and Magic Remedies
(Objectionable Advertisements) Act, 1954, the Legal Metrology (Packaged Commodities) Rules,2011
and/or Food Safety and Standards (Labelling and Display) Regulations, 2020 as amended time to
time, for displaying such pre-packaged products and share with Swiggy a legible and clear images of
the ‘principal display panel’ of such pre-packaged products, which shall be displayed on the Platform
for the Buyers. It is clarified that Swiggy shall facilitate but does not and shall not verify the content
shared by
the Merchant for displaying.
b. Swiggy shall merely facilitate the pick-up and delivery of the Orders on the Platform through
the PDPs and the PDPs are at liberty to choose the means for the pick-up and delivery of the Orders
placed by Buyers on the Platform. Swiggy is merely providing Delivery Facilitation Services between
the PDP and the Buyer or Merchant, as the case may be. Swiggy is not providing any delivery
services whatsoever through itself, either to the Merchant or to the Buyer. Notwithstanding anything
else contained under these Merchant Terms, neither Party shall be liable for any unauthorized act of
the PDPs and the liability shall solely rest with the PDPs. With respect to the Merchants providing
their own delivery services, the liability arising out of such deliveries shall be that of respective
Merchants and neither Swiggy nor PDPs are liable for the same.
c. Notwithstanding anything else contained under these Merchant T&C Swiggy shall not be
responsible for any misconduct by the PDPs, for eg., theft of the Order or any illegal activity or
misconduct against/with the Buyer(s) and / or the staff of the Merchant or indulge in any vandalism
against the Merchant.
d. Swiggy shall at its sole discretion determine the areas where the Platfom Services shall be
provided by Swiggy via the Platform. Further, Swiggy reserves the right to at its sole discretion (i) add
or remove any area as it may deem fit in order to improve Facilitation Services and (ii) choose the
radius within which such Facilitation Services may be extended, i.e., the maximum distance it may
choose to extend Facilitation Services from where a Merchant may be located.
e. Merchant shall be responsible to reimburse and/or absorb the cost of Orders for which Buyers
have either refused to pay for or have claimed a refund for reasons that are solely attributed to
Merchant (“Disputed Orders”), including but not limited to:
i. Buyer’s expectations not being met or Buyer dissatisfaction with regard to the quality of
items/products supplied by the Merchant;
ii. Expired products;
iii. Buyer receiving inferior quality products.
f. The Merchant shall be solely responsible for reviewing information on the Platform and shall
ensure that all information mentioned / advertised is up to date and in accordance with Applicable
Laws. The Merchant shall update all such information and inform Swiggy about the same in
accordance with these Merchant Terms. Swiggy shall not be liable or responsible in any way for any
change in product description provided by the Merchant.
g. The Merchant shall be solely responsible for any warranty /guarantee of the products sold to
the Buyers and in no event shall it be the responsibility of Swiggy.
h. it shall ensure, at all time, its Personnel, its employees and representatives (Merchant
Personnel) behave in a respectable and courteous manner with PDPs, Swiggy representatives and as
well as with the Buyers. Merchant personnel shall not be rude, behave discourteously, or use foul or
abusive language at any interaction. It shall at all time promptly report to Swiggy immediately, any
behavioural issue by such PDPs or Swiggy representatives or Buyers for
suitable action;
i. Upon receipt of any communication/complaint from Buyers regarding sale of products above
the maximum retail price, Swiggy shall be at liberty to, on verifying the same, refund such Buyer for
excess amounts charged against a product and deduct the same from the
Merchant from future settlements; and
j. it shall be alert to the advisories issued by Swiggy on ancillary charges that may be
chargeable by Merchants to Buyers on the Platform. The Merchant shall, in view of such advisories
being issued to adopt best industry practices and in the interest of Merchants and Buyers,
endeavour to adhere to such advisories swiftly.
k. Merchant shall not list any product that is prohibited, illegal, or otherwise restricted under
applicable laws and regulations.
IX. Each Party hereby grants to the other Party a non-exclusive, non-transferable, worldwide,
royalty free right to use, copy, publish and display the other Party’s trademarks, logos, name and
related information solely in connection with the promotion and marketing of the collaboration
between Swiggy and the Merchants and related purposes, including for publishing on the Platform.
Swiggy may at its sole discretion, and subject to payment of
compensation as may be determined by Swiggy undertake brand promotion within the Merchant
outlet(s).
X. Notwithstanding these terms and conditions, Swiggy reserves the right to delist products,
temporarily discontinue or terminate the Services with immediate effect for any breach or
non-compliance by the Merchant which includes, but is not limited to, the following instances:
a. Buyer complaints received by Swiggy which are directly or indirectly attributable to the
quality of product sold by the
Merchant;
b. Breach of the provisions of (a) Information Technology Act, 2000 and the rules thereunder;
(b) Food Safety and Standards Act, 2006 and the rules and regulations thereunder; (c) Legal
Metrology Act, 2009 and the rules thereunder; (d) Drugs and Cosmetics Act, 1940 and the Rules
thereunder (e) Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954, or (f)any
other applicable domestic laws, rules and regulations (including the provisions of any applicable
exchange control laws or regulations in force); or (e) international laws, foreign exchange laws,
statutes,
ordinances and regulations (including, but not limited to good and service tax and/or any other taxes,
custom duty, local levies), as may be applicable, to Merchant;
c. Misbehaviour with Swiggy’s representatives/personnel;
d. Inclusion of marketing or promotional material belonging to competitors in Orders delivered
by PDPs;
e. Any other breach of the terms of the Merchant T&C. . Swiggy Reserves the right
to resume provision of Platform Services to the Merchant at own
discretion.
XI. Notwithstanding anything contained under Clause X above, Swiggy has the right to
immediately delist any product on the Platform, which is not in compliance with the Applicable Laws.
XII. The Merchant acknowledges that all Services offered by Swiggy on the Swiggy Platform are
non-exclusive in nature.
XIII. Swiggy reserves the right to introduce, withdraw or modify any category and attach necessary
conditions thereto on its Platform as it may deem fit from time to time.
XIV. Your Account and Registration Obligations If you use the
Merchant interface or the Platform, you shall be responsible for maintaining confidentiality of your
login ID and password details and all activities that occur with the use of your login and password
details. You agree that if you provide any information or content, required under these terms and
conditions to be put up on the Platform, which is untrue, inaccurate, not updated, or incomplete or we
have reasonable grounds to suspect that such information is untrue, inaccurate, not updated ,
incomplete, or not in accordance with the Merchant T&C, we shall have the right to indefinitely
suspend, terminate or block you from availing Services. Your registration with Swiggy as a Merchant
is exclusively for your use to gain access to the Platform and is strictly not
transferable.
XV. Communications
When you use the Merchant interface/Platform or send emails, other data, information, or
communication to us, you agree and understand that you are communicating with us through
electronic records and you consent to receive communications via electronic records from us
periodically or as and when required. We may communicate with you by email or any other mode of
communication, electronic or otherwise.
XVI. Swiggy Partner App And Use Merchant shall
be granted access to Merchant interface for handheld devices and at its sole discretion Swiggy may
issue hand held device to the Merchant (with embedded partner App) and the Merchant shall:
i. ensure it has a functional electronic tablet / mobile phone with the Swiggy partner App
installed and up to date at all times in (a) receive and confirm Buyer Orders and provide estimates of
delivery times or; (b) reject the Order through the Merchant interface;
ii. in case it declines Orders through the electronic tablet / mobile phones provided
however, then it shall not use alternate means (phone/ emails) to connect with the Buyer in
parallel to take Orders and thereby circumventing the
process;
iii. Communicate with Swiggy service operator through the phone call and/or SMS;
iv. Manage real time status of item stock/inventories and outlet operation time.
XVII. Disclaimer
Platform Services are provided on best effort basis and Swiggy shall have no liability for failure of
such services for the reasons beyond its control. To the fullest extent permitted by law, Swiggy and its
affiliates, and each of their respective officers, directors, members, employees, and agents disclaim all
warranties, express or implied, in connection with these Merchant T&C, the Platform Services and
any use thereof, including, without limitation, the implied warranties of its merchantability, fitness for
a particular purpose and non- infringement. Swiggy makes no warranties or representations about the
accuracy or completeness of the Platform’s content or the content of any other websites linked to the
Platform, and assumes no liability or responsibility for any (a) errors, mistakes, or inaccuracies of
content and materials, (b) personal injury or property damage, of any nature whatsoever, resulting
from the Merchant’s access to and use of the Platform and the Platform Services, (c) any unauthorized
access to or use of Swiggy servers and/or any and all personal information and/or financial
information stored therein, (d) any interruption or cessation of transmission to or from the Platform or
otherwise with respect to the Services, (e) any bugs, viruses, trojan horses, or the like which may be
transmitted to or through the Platform or services by any third party, and/or (f) any errors or omissions
in any content and materials or for any loss or damage of any kind incurred as a result of the use of
any content posted, transmitted, or otherwise made available via the Platform or Platform Services.
Swiggy disclaims any and all liability for direct, indirect, incidental, special, consequential, punitive
or other similar damages that may arise due to any deficiency in the Orders attributable to the
Merchant, any malfunction or error of the Platform by the Merchant including but not limited to,
technical errors, delays, omissions, inaccuracies in the content provided. .
XVIII. Intellectual Property
a. Each Party owns all right, title and interest in their respective trade names, service marks,
inventions, copyrights, trade secrets, patents, and other intellectual property (“Intellectual Property”).
These Merchant T&C do not constitute a license or a right to use any Party’s Intellectual Property
other than as expressly set out herein. You and we agree that, in the event of any third-party claims
infringement of its intellectual property rights on the Platform, and such content which is alleged to
have infringed such third party intellectual property rights has been shared on the Platform by you, it
shall be your responsibility to investigate, defend, settle and discharge any such intellectual property
infringement claim in relation to such content on the Platform.
b. You recognise that Swiggy is the registered owner of the word marks, ‘Swiggy’ and ‘Swiggy
Instamart’, and the logos ‘ ’ including but not limited to its variants (‘Licensed
Marks’) and further agree not to directly or indirectly, attack or assist another in attacking the validity
of Swiggy’s or its affiliates proprietary rights in, the Licensed Marks or any registrations thereof, or
file any applications for the registration of the Licensed Marks or any names or logos derived from or
confusingly similar to the Licensed Marks, any variation thereof, or any translation or transliteration
thereof in another language, in respect of any products/services and in any territory throughout the
world. In the event you notice any infringements of Licensed Marks, please write to us at
brand-protection@swiggy.in.
c. Swiggy respects third party intellectual property rights and has put in place a ‘IP Notice and
Take Down Policy’ so that intellectual property owners can easily report listings that infringe their
right to ensure that infringing products are removed from the site, as such intellectual property
violations erode Buyer and good Merchant trust. Note: Swiggy does not and cannot verify that
Merchants have the right or ability to sell or distribute their listed products. However, Swiggy is
committed to ensure that item listings do not infringe upon intellectual property rights of third
parties once an authorized
representative of the rights owner properly reports them to Swiggy XX.
XIX Information and Privacy Policy
(i) Swiggy reserves the right to store and retain any and all information provided by the
Merchant, including when the Merchant accesses the Platform or avails the Platform
Services. The Merchant consents to collection, storage, processing and transfer of
Merchant’s account details and details of the transactions conducted on the Platform for
Swiggy’s business purposes as well as to comply with Applicable Laws.
(ii) Any personal information a Merchant supplies to Swiggy will be used in accordance with
our Privacy Policy.
(iii) The Merchant agrees and acknowledges that the Merchant will be collecting personal
information (including sensitive personal information) of Buyers to effectuate the sale of
the products on the Platform. The Merchant agrees that data of Buyers is collected through
the Platform pursuant to the Platform privacy policy on Swiggy. The Merchant shall treat
such personal information as confidential information, shall not use the same for its own
purpose or distribute, sell, or otherwise use, such data in any form or means except as
permitted under the terms herein, all other agreements that the Merchant has executed with
Swiggy and at all times in accordance with applicable data protection laws.
(iv) The Merchant agrees and acknowledges that in the event of change in applicable data
protection laws, the Merchant shall implement necessary steps to ensure compliance with
such new applicable data protection laws.
XX. Sale of Pharmaceutical Products
(i) The Merchant shall at all times, maintain all such licenses, registrations and approvals as
may be required under applicable laws to exhibit and sell products, including but not
limited to licenses under the Drugs and Cosmetics Act, 1940 and the Food Safety and
Standards Act, 2006.
(ii) The Merchant shall ensure that, wherever required, the sale of all products is carried
under the supervision of personnel who are duly qualified and registered under applicable
laws and that its facilities are maintained and comply with applicable laws and are
equipped with the necessary equipment to handle, store and deal with the products. The
Merchant shall be responsible for maintaining all records and registers as may be required
under applicable laws.
(iii) The Merchant shall ensure that, wherever required under applicable laws, the registered
pharmacist employed by it and identified as such in the licenses obtained by the Merchant
under the Drugs and Cosmetics Act, 1940 verifies the prescriptions received by it through
the Platform and the dispatch and sale of such pharmaceutical products is, at all times,
carried out under the personal supervision of such registered pharmacist.
(iv) The Merchant shall only list and sell such products on the Platform, the sale of which is
not prohibited under applicable laws.
XXI. Notice
All notices under these Merchant T&C shall be sent by registered post acknowledgment due,
contemporaneous courier or email or hand delivered to the address mentioned below. Swiggy Limited
Reg Office: No.55, Sy.no. 8-14, I & J Block, Ground Floor, Embassy Tech Village,
Outer Ring Road, Devarabisanahalli, Bangalore -560103, between
9.30 am to 5.30 pm from Monday to Friday. If the Merchant notices any discrepancy in the Settlement
of Collections, the Merchant may raise a ticket by writing an email to partnersupport@swiggy.in and
the same will be mutually resolved by both parties within 15
days from the date on which the ticket was raised. Swiggy shall issue notice to Merchant
vide registered post acknowledgment due, contemporaneous courier, hand delivery, partner App or
email or mobile number registered with Swiggy.
XXII. Force Majeure
If at any time during the currency of the agreement between Merchant and Swiggy, the performance in
whole or in part by either Party or any obligations under the contract shall be prevented or delayed by
reasons of acts of God, war, hostilities, invasions, act of public enemies, civil commotion, sabotage,
fire, explosions, flood, cyclone, earthquake, epidemics and any form of government restrictions on
business operations, adverse climatic conditions and other unforeseen events or circumstances etc.
(hereinafter referred to as “Force Majeure Conditions”) which directly affect the performance of
obligations and which are beyond the reasonable control of either party, provided notice of the
happening of any one or more of the Force Majeure Conditions is given by either party to the other
within 21 days from the date of the occurrence of the Force Majeure Conditions, the obligation of the
party giving notice shall stand suspended without any liability towards the other party so long as such
Force Majeure Conditions continues except such obligations as may have accrued till the date of
commencement of the Force Majeure.
XXIII. Anti Bribery
In case the Parties become aware of any benefit in cash or in kind being provided to any officer or
employee, or any relative / associate of any officer or employee, of the other Party or of any of its
associate companies, in Order to secure this transaction, it shall notify the other Party of the same and
the Parties will determine the way forward. In case of notification to Swiggy, it shall be sent to
Swiggy's ethics hotline portal, whose contact details are
captured below:
i. Toll-free: By dialling a toll-free number – 000 800 100 4382 or 0008001008277 or
+91 11-71279005 (Available in English language at all times and in Hindi between 11.30 am to
6.30pm). Outside of this window, other reporting channels can be used for providing
information.
ii. Email: By sending an email to “swiggy@ethics-line.com”
iii. Web Portal: www.tip-offs.com/Swiggy
`}
        </pre>
      </div>
    </div>
  );
};

export default TermAndConditions;
