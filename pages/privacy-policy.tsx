import { Box, Container, Divider, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Layout from '../components/layouts/title';
import Section from '../components/Section';

const PrivacyPolicy: NextPage = () => {
  return (
    <Layout title={'Privacy Policy'}>
      <Box pt={'4rem'}>
        <Section>
          <Container
            maxW={{
              base: 'container.sm',
              md: 'container.md',
              lg: 'container.md',
            }}
            textAlign={'justify'}
          >
            <Heading>
              <Box as={'span'} color={'primary.500'} textAlign={'left'}>
                Privacy Policy
              </Box>
              <Divider />
            </Heading>

            <Box mt={5}>
              <Text>Last updated: May 13, 2023</Text>
            </Box>

            <Box mt={5}>
              <Text>
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You.
              </Text>
            </Box>

            <Box mt={5}>
              <Text>
                We use Your Personal data to provide and improve the Service. By
                using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy. This Privacy
                Policy has been created with the help of the Privacy Policy
                Generator.
              </Text>
            </Box>

            <Heading mt={5}>
              <Box as={'span'} color={'primary.500'} textAlign={'left'}>
                Interpretation and Definitions
              </Box>
              <Divider />
            </Heading>

            <Box mt={5}>
              <Heading as={'h2'} size={'md'}>
                <Box as={'span'} color={'primary.500'}>
                  Interpretation
                </Box>
              </Heading>
            </Box>

            <Box mt={5}>
              <Text>
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </Text>
            </Box>

            <Box mt={5}>
              <Heading as={'h2'} size={'md'}>
                <Box as={'span'} color={'primary.500'}>
                  Definitions
                </Box>
              </Heading>
            </Box>

            <Box mt={5}>
              <Text>For the purposes of this Privacy Policy:</Text>
            </Box>

            <Box mt={5} paddingLeft={'1rem'}>
              <Text>
                <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                  Account
                </Box>{' '}
                means a unique account created for You to access our Service or
                parts of our Service. <br />
                <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                  Company
                </Box>{' '}
                (referred to as either "the Company", "We", "Us" or "Our" in
                this Agreement) refers to Resonate with Yourself.
                <br />
                <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                  Cookies
                </Box>{' '}
                are small files that are placed on Your computer, mobile device
                or any other device by a website, containing the details of Your
                browsing history on that website among its many uses.
                <br />
                <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                  Country
                </Box>{' '}
                refers to: Albania
                <br />
                <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                  Device
                </Box>{' '}
                means any device that can access the Service such as a computer,
                a cellphone or a digital tablet.
                <br />
                <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                  Personal Data
                </Box>{' '}
                is any information that relates to an identified or identifiable
                individual.
                <br />
                <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                  Service
                </Box>{' '}
                refers to the Website.
                <br />
                <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                  Service Provider
                </Box>{' '}
                means any natural or legal person who processes the data on
                behalf of the Company. It refers to third-party companies or
                individuals employed by the Company to facilitate the Service,
                to provide the Service on behalf of the Company, to perform
                services related to the Service or to assist the Company in
                analyzing how the Service is used.
                <br />
                <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                  Usage Data
                </Box>{' '}
                refers to data collected automatically, either generated by the
                use of the Service or from the Service infrastructure itself
                (for example, the duration of a page visit).
                <br />
                <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                  Website
                </Box>{' '}
                refers to Resonate with Yourself, accessible from{' '}
                <a
                  href={'https://resonatewithyourself.com'}
                  rel={'external nofollow noopener noreferrer'}
                  target={'_blank'}
                  style={{
                    color: 'rgba(250, 175, 58, 1)',
                    fontWeight: 'bold',
                  }}
                >
                  https://resonatewithyourself.com
                </a>
                <br />
                <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                  You
                </Box>{' '}
                means the individual accessing or using the Service, or the
                company, or other legal entity on behalf of which such
                individual is accessing or using the Service, as applicable.
              </Text>
            </Box>

            <Box mt={5}>
              <Heading>
                <Box as={'span'} color={'primary.500'} textAlign={'left'}>
                  Collecting and Using Your Personal Data
                </Box>
                <Divider />
              </Heading>
            </Box>

            <Box mt={5}>
              <Heading as={'h2'} size={'md'}>
                <Box as={'span'} color={'primary.500'}>
                  Types of Data Collected
                </Box>
              </Heading>
            </Box>

            <Box mt={5}>
              <Heading as={'h3'} size={'sm'}>
                <Box as={'span'} color={'primary.500'}>
                  Personal Data
                </Box>
              </Heading>

              <Box>
                <Text
                  mt={5}
                  paddingLeft={'1rem'}
                  fontWeight={'bold'}
                  color={'primary.500'}
                >
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
                </Text>
                <Text mt={5} paddingLeft={'2rem'}>
                  <Box as={'span'} color={'primary.500'}>
                    Email address
                    <br />
                    First name and last name
                    <br />
                    Phone number
                    <br />
                    Address, State, Province, ZIP/Postal code, City
                    <br />
                    Usage Data
                  </Box>
                </Text>
              </Box>
            </Box>

            <Box mt={5}>
              <Heading as={'h3'} size={'sm'}>
                <Box as={'span'} color={'primary.500'}>
                  Usage Data
                </Box>
              </Heading>

              <Box>
                <Text
                  mt={5}
                  paddingLeft={'1rem'}
                  fontWeight={'bold'}
                  color={'primary.500'}
                >
                  Usage Data is collected automatically when using the Service.
                </Text>
                <Text mt={5} paddingLeft={'2rem'}>
                  <Box as={'span'} color={'primary.500'}>
                    Usage Data may include information such as Your Device's
                    Internet Protocol address (e.g. IP address), browser type,
                    browser version, the pages of our Service that You visit,
                    the time and date of Your visit, the time spent on those
                    pages, unique device identifiers and other diagnostic data.
                    <br />
                    When You access the Service by or through a mobile device,
                    We may collect certain information automatically, including,
                    but not limited to, the type of mobile device You use, Your
                    mobile device unique ID, the IP address of Your mobile
                    device, Your mobile operating system, the type of mobile
                    Internet browser You use, unique device identifiers and
                    other diagnostic data.
                    <br />
                    We may also collect information that Your browser sends
                    whenever You visit our Service or when You access the
                    Service by or through a mobile device.
                  </Box>
                </Text>
              </Box>
            </Box>

            <Box mt={5}>
              <Heading as={'h3'} size={'sm'}>
                <Box as={'span'} color={'primary.500'}>
                  Tracking Technologies and Cookies
                </Box>
              </Heading>

              <Box>
                <Text
                  mt={5}
                  paddingLeft={'1rem'}
                  fontWeight={'bold'}
                  color={'primary.500'}
                >
                  We use Cookies and similar tracking technologies to track the
                  activity on Our Service and store certain information.
                  Tracking technologies used are beacons, tags, and scripts to
                  collect and track information and to improve and analyze Our
                  Service. The technologies We use may include:
                </Text>
                <Text mt={5} paddingLeft={'2rem'}>
                  <Box as={'span'} color={'primary.500'}>
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      Cookies or Browser Cookies.
                    </Box>{' '}
                    A cookie is a small file placed on Your Device. You can
                    instruct Your browser to refuse all Cookies or to indicate
                    when a Cookie is being sent. However, if You do not accept
                    Cookies, You may not be able to use some parts of our
                    Service. Unless you have adjusted Your browser setting so
                    that it will refuse Cookies, our Service may use Cookies.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      Flash Cookies.
                    </Box>{' '}
                    Certain features of our Service may use local stored objects
                    (or Flash Cookies) to collect and store information about
                    Your preferences or Your activity on our Service. Flash
                    Cookies are not managed by the same browser settings as
                    those used for Browser Cookies. For more information on how
                    You can delete Flash Cookies, please read "Where can I
                    change the settings for disabling, or deleting local shared
                    objects?" available at{' '}
                    <a
                      href={
                        'https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html'
                      }
                      rel={'external nofollow noopener noreferrer'}
                      target={'_blank'}
                      style={{
                        color: 'rgba(250, 175, 58, 1)',
                        fontWeight: 'bold',
                      }}
                    >
                      https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html
                    </a>
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      Web Beacons.
                    </Box>{' '}
                    Certain sections of our Service and our emails may contain
                    small electronic files known as web beacons (also referred
                    to as clear gifs, pixel tags, and single-pixel gifs) that
                    permit the Company, for example, to count users who have
                    visited those pages or opened an email and for other related
                    website statistics (for example, recording the popularity of
                    a certain section and verifying system and server
                    integrity).
                  </Box>
                </Text>
              </Box>
            </Box>

            <Box mt={5}>
              <Heading as={'h3'} size={'sm'}>
                <Box as={'span'} color={'primary.500'}>
                  Cookies can be "Persistent" or "Session" Cookies. Persistent
                  Cookies remain on Your personal computer or mobile device when
                  You go offline, while Session Cookies are deleted as soon as
                  You close Your web browser. Learn more about cookies:{' '}
                  <a
                    href={'https://www.privacypolicies.com/blog/cookies/'}
                    rel={'external nofollow noopener noreferrer'}
                    target={'_blank'}
                    style={{
                      color: 'rgba(250, 175, 58, 1)',
                      fontWeight: 'bold',
                    }}
                  >
                    All About Cookies
                  </a>
                  .
                </Box>
              </Heading>

              <Box>
                <Text
                  mt={5}
                  paddingLeft={'1rem'}
                  fontWeight={'bold'}
                  color={'primary.500'}
                >
                  We use both Session and Persistent Cookies for the purposes
                  set out below:
                </Text>
                <Text mt={5} paddingLeft={'2rem'}>
                  <Box as={'span'} color={'primary.500'}>
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      Necessary / Essential Cookies
                    </Box>{' '}
                    <br />
                    Type: Session Cookies <br />
                    Administered by: Us <br />
                    Purpose: These Cookies are essential to provide You with
                    services available through the Website and to enable You to
                    use some of its features. They help to authenticate users
                    and prevent fraudulent use of user accounts. Without these
                    Cookies, the services that You have asked for cannot be
                    provided, and We only use these Cookies to provide You with
                    those services.
                  </Box>
                </Text>
              </Box>
            </Box>

            <Box mt={5}>
              <Heading as={'h3'} size={'sm'}>
                <Box as={'span'} color={'primary.500'}>
                  Use of Your Personal Data
                </Box>
              </Heading>

              <Box>
                <Text
                  mt={5}
                  paddingLeft={'1rem'}
                  fontWeight={'bold'}
                  color={'primary.500'}
                >
                  The Company may use Personal Data for the following purposes:
                </Text>
                <Text mt={5} paddingLeft={'2rem'}>
                  <Box as={'span'} color={'primary.500'}>
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      To provide and maintain our Service
                    </Box>{' '}
                    , including to monitor the usage of our Service.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      To manage Your Account:
                    </Box>{' '}
                    to manage Your registration as a user of the Service. The
                    Personal Data You provide can give You access to different
                    functionalities of the Service that are available to You as
                    a registered user.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      For the performance of a contract:
                    </Box>{' '}
                    the development, compliance and undertaking of the purchase
                    contract for the products, items or services You have
                    purchased or of any other contract with Us through the
                    Service.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      To contact You:
                    </Box>{' '}
                    To contact You by email, telephone calls, SMS, or other
                    equivalent forms of electronic communication, such as a
                    mobile application's push notifications regarding updates or
                    informative communications related to the functionalities,
                    products or contracted services, including the security
                    updates, when necessary or reasonable for their
                    implementation.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      To provide You
                    </Box>{' '}
                    with news, special offers and general information about
                    other goods, services and events which we offer that are
                    similar to those that you have already purchased or enquired
                    about unless You have opted not to receive such information.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      To manage Your requests:
                    </Box>{' '}
                    To attend and manage Your requests to Us.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      For business transfers:
                    </Box>{' '}
                    We may use Your information to evaluate or conduct a merger,
                    divestiture, restructuring, reorganization, dissolution, or
                    other sale or transfer of some or all of Our assets, whether
                    as a going concern or as part of bankruptcy, liquidation, or
                    similar proceeding, in which Personal Data held by Us about
                    our Service users is among the assets transferred.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      For other purposes:
                    </Box>{' '}
                    We may use Your information for other purposes, such as data
                    analysis, identifying usage trends, determining the
                    effectiveness of our promotional campaigns and to evaluate
                    and improve our Service, products, services, marketing and
                    your experience.
                    <br />
                    We may share Your personal information in the following
                    situations:
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      With Service Providers:
                    </Box>{' '}
                    We may share Your personal information with Service
                    Providers to monitor and analyze the use of our Service, to
                    contact You.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      For business transfers:
                    </Box>{' '}
                    We may share or transfer Your personal information in
                    connection with, or during negotiations of, any merger, sale
                    of Company assets, financing, or acquisition of all or a
                    portion of Our business to another company.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      With Affiliates:
                    </Box>{' '}
                    We may share Your information with Our affiliates, in which
                    case we will require those affiliates to honor this Privacy
                    Policy. Affiliates include Our parent company and any other
                    subsidiaries, joint venture partners or other companies that
                    We control or that are under common control with Us.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      With business partners:
                    </Box>{' '}
                    We may share Your information with Our business partners to
                    offer You certain products, services or promotions.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      With other users:
                    </Box>{' '}
                    when You share personal information or otherwise interact in
                    the public areas with other users, such information may be
                    viewed by all users and may be publicly distributed outside.
                    If You interact with other users or register through a
                    Third-Party Social Media Service, Your contacts on the
                    Third-Party Social Media Service may see Your name, profile,
                    pictures and description of Your activity. Similar to other
                    websites, the Website may use a standard technology called
                    "cookies" (see explanation below, "What Are Cookies?") and
                    server logs to collect information about how the Website is
                    used. Information gathered through cookies and server logs
                    may include the date and time of visits, the pages viewed,
                    time spent at our Website, and the websites visited just
                    before and just after our Website, Your IP address.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      With Your consent:
                    </Box>{' '}
                    We may disclose Your personal information for any other
                    purpose with Your consent.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      Retention of Your Personal Data
                    </Box>{' '}
                    The Company will retain Your Personal Data only for as long
                    as is necessary for the purposes set out in this Privacy
                    Policy. We will retain and use Your Personal Data to the
                    extent necessary to comply with our legal obligations (for
                    example, if we are required to retain your data to comply
                    with applicable laws), resolve disputes, and enforce our
                    legal agreements and policies. The Company will also retain
                    Usage Data for internal analysis purposes. Usage Data is
                    generally retained for a shorter period of time, except when
                    this data is used to strengthen the security or to improve
                    the functionality of Our Service, or We are legally
                    obligated to retain this data for longer time periods.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      Transfer of Your Personal Data
                    </Box>{' '}
                    Your information, including Personal Data, is processed at
                    the Company's operating offices and in any other places
                    where the parties involved in the processing are located. It
                    means that this information may be transferred to — and
                    maintained on — computers located outside of Your state,
                    province, country or other governmental jurisdiction where
                    the data protection laws may differ than those from Your
                    jurisdiction. Your consent to this Privacy Policy followed
                    by Your submission of such information represents Your
                    agreement to that transfer. The Company will take all steps
                    reasonably necessary to ensure that Your data is treated
                    securely and in accordance with this Privacy Policy and no
                    transfer of Your Personal Data will take place to an
                    organization or a country unless there are adequate controls
                    in place including the security of Your data and other
                    personal information.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      Disclosure of Your Personal Data
                    </Box>{' '}
                    Business Transactions If the Company is involved in a
                    merger, acquisition or asset sale, Your Personal Data may be
                    transferred. We will provide notice before Your Personal
                    Data is transferred and becomes subject to a different
                    Privacy Policy.
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      Law enforcement
                    </Box>{' '}
                    Under certain circumstances, the Company may be required to
                    disclose Your Personal Data if required to do so by law or
                    in response to valid requests by public authorities (e.g. a
                    court or a government agency).
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      Other legal requirements
                    </Box>{' '}
                    The Company may disclose Your Personal Data in the good
                    faith belief that such action is necessary to:
                    <br />
                    <Box as={'span'} color={'primary.500'} fontWeight={'bold'}>
                      Security of Your Personal Data
                    </Box>{' '}
                    The security of Your Personal Data is important to Us, but
                    remember that no method of transmission over the Internet,
                    or method of electronic storage is 100% secure. While We
                    strive to use commercially acceptable means to protect Your
                    Personal Data, We cannot guarantee its absolute security.
                  </Box>
                </Text>
              </Box>
            </Box>

            <Box mt={5}>
              <Heading>
                <Box as={'span'} color={'primary.500'} textAlign={'left'}>
                  Children's Privacy
                </Box>
                <Divider />
              </Heading>

              <Box>
                <Text
                  mt={5}
                  paddingLeft={'1rem'}
                  fontWeight={'bold'}
                  color={'primary.500'}
                >
                  Our Service does not address anyone under the age of 18. We do
                  not knowingly collect personally identifiable information from
                  anyone under the age of 18. If You are a parent or guardian
                  and You are aware that Your child has provided Us with
                  Personal Data, please contact Us. If We become aware that We
                  have collected Personal Data from anyone under the age of 18
                  without verification of parental consent, We take steps to
                  remove that information from Our servers. If We need to rely
                  on consent as a legal basis for processing Your information
                  and Your country requires consent from a parent, We may
                  require Your parent's consent before We collect and use that
                  information.
                </Text>
              </Box>
            </Box>

            <Box mt={5}>
              <Heading>
                <Box as={'span'} color={'primary.500'} textAlign={'left'}>
                  Links to Other Websites
                </Box>
                <Divider />
              </Heading>

              <Box>
                <Text
                  mt={5}
                  paddingLeft={'1rem'}
                  fontWeight={'bold'}
                  color={'primary.500'}
                >
                  Our Service may contain links to other websites that are not
                  operated by Us. If You click on a third party link, You will
                  be directed to that third party's site. We strongly advise You
                  to review the Privacy Policy of every site You visit. We have
                  no control over and assume no responsibility for the content,
                  privacy policies or practices of any third party sites or
                  services.
                </Text>
              </Box>
            </Box>

            <Box mt={5}>
              <Heading>
                <Box as={'span'} color={'primary.500'} textAlign={'left'}>
                  Changes to this Privacy Policy
                </Box>
                <Divider />
              </Heading>

              <Box>
                <Text
                  mt={5}
                  paddingLeft={'1rem'}
                  fontWeight={'bold'}
                  color={'primary.500'}
                >
                  We may update Our Privacy Policy from time to time. We will
                  notify You of any changes by posting the new Privacy Policy on
                  this page. We will let You know via email and/or a prominent
                  notice on Our Service, prior to the change becoming effective
                  and update the "Last updated" date at the top of this Privacy
                  Policy. You are advised to review this Privacy Policy
                  periodically for any changes. Changes to this Privacy Policy
                  are effective when they are posted on this page.
                </Text>
              </Box>
            </Box>

            <Box mt={5}>
              <Heading>
                <Box as={'span'} color={'primary.500'} textAlign={'left'}>
                  Contact Us
                </Box>
                <Divider />
              </Heading>

              <Text mt={5} paddingLeft={'1rem'} fontWeight={'bold'}>
                If you have any questions about this Privacy Policy, You can
                contact us:
              </Text>
              <Text mt={5} paddingLeft={'2rem'}>
                <Box as={'span'} color={'primary.500'}>
                  By email:{' '}
                  <a
                    href={'mailto:resonatewithyourself@gmail.com'}
                    rel={'external nofollow noopener noreferrer'}
                    target={'_blank'}
                    style={{
                      color: 'rgba(250, 175, 58, 1)',
                      fontWeight: 'bold',
                    }}
                  >
                    resonatewithyourself@gmail.com
                  </a>
                </Box>
              </Text>

              <Text mt={5} paddingLeft={'2rem'}>
                <Box as={'span'} color={'primary.500'}>
                  By visiting this page on our website:{' '}
                  <a
                    href={'https://resonatewithyourself.com/contact'}
                    rel={'external nofollow noopener noreferrer'}
                    target={'_blank'}
                    style={{
                      color: 'rgba(250, 175, 58, 1)',
                      fontWeight: 'bold',
                    }}
                  >
                    https://resonatewithyourself.com/contact
                  </a>
                </Box>
              </Text>
            </Box>

            <Box mt={5}>
              <Heading>
                <Box as={'span'} color={'primary.500'} textAlign={'left'}>
                  Download Privacy Policy
                </Box>
                <Divider />
              </Heading>

              <Text mt={5} paddingLeft={'1rem'} fontWeight={'bold'}>
                You can download the Privacy Policy here:{' '}
                <a
                  href={'/resonate_with_yourself_privacy_policy_en.docx'}
                  rel={'external nofollow noopener noreferrer'}
                  target={'_blank'}
                  style={{
                    color: 'rgba(250, 175, 58, 1)',
                    fontWeight: 'bold',
                  }}
                >
                  Privacy Policy
                </a>
              </Text>
            </Box>
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default PrivacyPolicy;
