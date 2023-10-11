import footerMap from '@/assets/images/footer-map.png';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconBrandFacebookFilled,
  IconBrandWhatsapp,
  IconMailFilled,
  IconMapPinFilled,
  IconPhoneFilled,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
const FooterSection = () => {
  const isHasRow = useMediaQuery('(min-width: 1400px)');
  return (
    <section
      style={{ width: '100%', height: '100%', display: 'flex', color: 'white' }}
    >
      <div
        style={{
          padding: '100px 1rem 100px 100px',
          width: '70%',
        }}
      >
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={{
            hidden: {
              x: -100,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
            },
          }}
          style={{
            color: 'white',
            fontSize: '3vw',
            fontWeight: '700',
            textTransform: 'uppercase',
          }}
        >
          Thông tin Liên hệ
        </motion.h3>
        {/* ============ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.3, delay: 0.3 }}
          variants={{
            hidden: {
              x: -100,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
            },
          }}
          style={{ marginTop: '2rem' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '1.25rem',
            }}
          >
            <IconMapPinFilled />
            <span
              style={{
                margin: '0 8px',
                textTransform: 'capitalize',
                fontWeight: 'bold',
              }}
            >
              Trụ sở:
            </span>
          </div>
          <div
            style={{
              textTransform: 'capitalize',
              fontSize: '1rem',
              fontWeight: '400',
            }}
          >
            16A Đường 58, Phường Phước Long A, Thành phố Thủ Đức, Thành phố Hồ
            Chí Minh, Việt Nam
          </div>
        </motion.div>
        <br />
        {/* ============ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={{
            hidden: {
              x: -100,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
            },
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '1.25rem',
            }}
          >
            <IconMapPinFilled />
            <span
              style={{
                margin: '0 8px',
                textTransform: 'capitalize',
                fontWeight: 'bold',
              }}
            >
              VPDD tại TP Hồ Chí minh:
            </span>
          </div>
          <div
            style={{
              textTransform: 'capitalize',
              fontSize: '1rem',
              fontWeight: '400',
            }}
          >
            36A Nguyễn Gia Trí, Phường 25, Quân Bình Thạnh, Thành phố Hồ Chí
            Minh, Việt Nam
          </div>
        </motion.div>
        <br />
        {/* ============ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={{
            hidden: {
              x: -100,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
            },
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '1.25rem',
            }}
          >
            <IconMapPinFilled />
            <span
              style={{
                margin: '0 8px',
                textTransform: 'capitalize',
                fontWeight: 'bold',
              }}
            >
              VPDD tại Bình Dương:
            </span>
          </div>
          <div
            style={{
              textTransform: 'capitalize',
              fontSize: '1rem',
              fontWeight: '400',
            }}
          >
            Km 1877, Quốc lộ 1K, Dĩ An, Bình Dương, Việt Nam
          </div>
        </motion.div>
        <br />
        {/* ============ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={{
            hidden: {
              x: -100,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
            },
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '1.25rem',
            }}
          >
            <IconMapPinFilled />
            <span
              style={{
                margin: '0 8px',
                textTransform: 'capitalize',
                fontWeight: 'bold',
              }}
            >
              VPDD tại Hà Nội:
            </span>
          </div>
          <div
            style={{
              textTransform: 'capitalize',
              fontSize: '1rem',
              fontWeight: '400',
            }}
          >
            Tầng 5, tòa nhà Dimond, số 1 Hoàng Đạo Thúy, Quận Thanh Xuân,TP Hà
            Nội, Việt Nam
          </div>
        </motion.div>
        <br />
        {/* ============ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.7 }}
          variants={{
            hidden: {
              x: -100,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
            },
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '1.25rem',
            }}
          >
            <IconPhoneFilled />
            <span
              style={{
                margin: '0 8px',
                textTransform: 'capitalize',
                fontWeight: 'bold',
              }}
            >
              Hotline:
            </span>
          </div>
          <a
            style={{
              textTransform: 'capitalize',
              fontSize: '1rem',
              fontWeight: '400',
            }}
            href="tel:02873806679"
          >
            0287 308 6679
          </a>
        </motion.div>
        <br />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.8 }}
          variants={{
            hidden: {
              x: -100,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
            },
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '1.25rem',
            }}
          >
            <IconMailFilled />
            <span
              style={{
                margin: '0 8px',
                textTransform: 'capitalize',
                fontWeight: 'bold',
              }}
            >
              Email:
            </span>
          </div>
          <a
            style={{
              fontSize: '1rem',
              fontWeight: '400',
            }}
            href="mailto:infor@dpmgroup.vn"
          >
            infor@dpmgroup.vn
          </a>
        </motion.div>
        {isHasRow ? (
          <>
            <br />
            {/* ============ */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.9 }}
              variants={{
                hidden: {
                  x: -100,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                },
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.25rem',
                }}
              >
                <IconBrandFacebookFilled />
                <span
                  style={{
                    margin: '0 8px',
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                  }}
                >
                  Facebook:
                </span>
              </div>
              <a
                style={{
                  textTransform: 'capitalize',
                  fontSize: '1rem',
                  fontWeight: '400',
                }}
                href="https://www.facebook.com/dpmgroup.vn"
              >
                CÔNG TY CỔ PHẦN TẬP ĐOÀN D P M
              </a>
            </motion.div>
            <br />
            {/* ============ */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 1 }}
              variants={{
                hidden: {
                  x: -100,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                },
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.25rem',
                }}
              >
                <IconBrandWhatsapp />
                <span
                  style={{
                    margin: '0 8px',
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                  }}
                >
                  Zalo:
                </span>
              </div>
              <a
                style={{
                  textTransform: 'capitalize',
                  fontSize: '1rem',
                  fontWeight: '400',
                }}
                href="https://zalo.me/2447259516218037384?gidzl=OCqS0VdJFW1dqnG1yCa_0s_G5GNlnpSA9TjD3UxDCWDmqXvIwiyr1d7GJm3lcsC188P903UkBXit_zSr00"
              >
                DPM Group Corporation
              </a>
            </motion.div>
          </>
        ) : null}
      </div>
      <div
        style={{
          padding: '2rem',
          width: '70%',
        }}
      >
        <img
          src={footerMap}
          alt="footerMap"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'grayscale(1)',
          }}
        />
      </div>
    </section>
  );
};

export default FooterSection;
